import json
import os
import re
import uuid
import zipfile
from itertools import chain

import pdfkit
from django.core import serializers
from django.core.paginator import Paginator
from django.db.models import Model, Q
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.views.generic import ListView, DetailView

from objects.forms import ApartmentForm
from objects.models import Objects, Images
from objects.watermaker import watermark_with_transparency
from users.models import CustomUser, Wishlist


class AllObjects(ListView):
    model = Objects
    template_name = "objects/objects.html"
    context_object_name = 'objects'
    paginate_by = 5

    def get_context_data(self, **kwargs):
        context = super(AllObjects, self).get_context_data(**kwargs)
        context.update({
            'images': Images.objects.all(),
            'wish' : Wishlist.objects.all(),
        })
        return context
    def get(self, request, *args, **kwargs):
        if self.request.GET.get('filter') == '1':
            if request.user.is_authenticated:
                object = list(
                    chain(Objects.objects.filter(status="Сдается", type_operation=request.GET.get('type'),property_type__contains=request.GET.get('apart'),tower__contains=request.GET.get('tower'),price__range=(request.GET['price_min'], request.GET['price_max']),price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']),price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']),price_square_month__range=(request.GET['price_square_month_min'],request.GET['price_square_month_max']),price_square_year__range=(request.GET['price_square_year_min'],request.GET['price_square_year_max'])),
                          Objects.objects.filter(status="Продается", type_operation=request.GET.get('type'),property_type__contains=request.GET.get('apart'),tower__contains=request.GET.get('tower'),price__range=(request.GET['price_min'], request.GET['price_max']),price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']),price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']),price_square_month__range=(request.GET['price_square_month_min'],request.GET['price_square_month_max']),price_square_year__range=(request.GET['price_square_year_min'],request.GET['price_square_year_max'])),
                          Objects.objects.filter(status="Продано", type_operation=request.GET.get('type'),property_type__contains=request.GET.get('apart'),tower__contains=request.GET.get('tower'),price__range=(request.GET['price_min'], request.GET['price_max']),price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']),price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']),price_square_month__range=(request.GET['price_square_month_min'],request.GET['price_square_month_max']),price_square_year__range=(request.GET['price_square_year_min'],request.GET['price_square_year_max'])),
                          Objects.objects.filter(status="Сдано", type_operation=request.GET.get('type'),property_type__contains=request.GET.get('apart'),tower__contains=request.GET.get('tower'),price__range=(request.GET['price_min'], request.GET['price_max']),price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']),price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']),price_square_month__range=(request.GET['price_square_month_min'],request.GET['price_square_month_max']),price_square_year__range=(request.GET['price_square_year_min'],request.GET['price_square_year_max']))))
            else:
                object = Objects.objects.exclude(Q(status="Сдано") & Q(status="Продано")).filter(property_type__contains=request.GET.get('apart'))
            page_obj = Paginator(object, 5).get_page(request.GET.get('page'))
            return render(request, 'objects/objects.html', {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(object)})

        elif request.GET.get('filter') == '2':
                if request.user.is_authenticated:
                    object = list(
                        chain(Objects.objects.filter(status="Сдается", property_type__contains=request.GET.get('apart')),
                              Objects.objects.filter(status="Продается", property_type__contains=request.GET.get('apart')),
                              Objects.objects.filter(status="Продано", property_type__contains=request.GET.get('apart')),
                              Objects.objects.filter(status="Сдано", property_type__contains=request.GET.get('apart'))))
                else:
                    object = Objects.objects.exclude(Q(status="Сдано") & Q(status="Продано")).filter(property_type__contains=request.GET.get('apart'))
                page_obj = Paginator(object, 5).get_page(request.GET.get('page'))
                return render(request, 'objects/objects.html', {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(object)})

        elif request.GET.get('filter') == '3':
            if request.user.is_authenticated:
                object = list(chain(Objects.objects.filter(status="Сдается", type_operation=request.GET.get('type')),
                                 Objects.objects.filter(status="Продается", type_operation=request.GET.get('type')),
                                 Objects.objects.filter(status="Продано", type_operation=request.GET.get('type')),
                                 Objects.objects.filter(status="Сдано", type_operation=request.GET.get('type'))))
            else:
                object = Objects.objects.exclude(Q(status="Сдано") & Q(status="Продано")).filter(type_operation=request.GET.get('type'))
            page_obj = Paginator(object, 5).get_page(request.GET.get('page'))
            return render(request, 'objects/objects.html', {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(object)})

        elif request.GET.get('filter') == '5':
            if request.user.is_authenticated:
                object = list(chain(Objects.objects.filter(status="Сдается", property_type__contains=request.GET.get('apart'), type_operation=request.GET.get('type_op')),
                                 Objects.objects.filter(status="Продается", property_type__contains=request.GET.get('apart'), type_operation=request.GET.get('type_op')),
                                 Objects.objects.filter(status="Продано", property_type__contains=request.GET.get('apart'), type_operation=request.GET.get('type_op')),
                                 Objects.objects.filter(status="Сдано", property_type__contains=request.GET.get('apart'), type_operation=request.GET.get('type_op'))))
            else:
                object = Objects.objects.exclude(Q(status="Сдано") & Q(status="Продано")).filter(property_type__contains=request.GET.get('apart'), type_operation=request.GET.get('type_op'))
            page_obj = Paginator(object, 5).get_page(request.GET.get('page'))
            return render(request, 'objects/objects.html', {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(object)})

        elif request.GET.get('filter') == '4':
            if request.user.is_authenticated:
                object = list(chain(Objects.objects.filter(tower=request.GET.get('tower'), status="Сдается"),
                                    Objects.objects.filter(tower=request.GET.get('tower'), status="Продается"),
                                    Objects.objects.filter(tower=request.GET.get('tower'), status="Продано"),
                                    Objects.objects.filter(tower=request.GET.get('tower'), status="Сдано")))
            else:
                object = Objects.objects.exclude(Q(status="Сдано") & Q(status="Продано")).filter(tower=request.GET.get('tower'))

            page_obj = Paginator(object, 5).get_page(request.GET.get('page'))
            return render(request, 'objects/objects.html', {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(object)})

        else:
            if request.user.is_authenticated:
                obj = list(chain(Objects.objects.filter(status="Сдается"),
                                 Objects.objects.filter(status="Продается"),
                                 Objects.objects.filter(status="Продано"),
                                 Objects.objects.filter(status="Сдано")))
            else:
                obj = Objects.objects.exclude(status="Сдано").exclude(status="Продано")
            page_obj = Paginator(obj, 5).get_page(request.GET.get('page'))
            return render(request, 'objects/objects.html', {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(obj)})

    def post(self, request, *args, **kwargs):
        # Define path to wkhtmltopdf.exe

        path_to_wkhtmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'

        # Define url
        url = f'http://127.0.0.1:8000/pdf?pdf_type={request.POST["pdf_type"]}&type_obj_pdf={request.POST["type_obj_pdf"]}'

        # Point pdfkit configuration to wkhtmltopdf.exe
        config = pdfkit.configuration(wkhtmltopdf=path_to_wkhtmltopdf)

        options = {
            'orientation': 'Landscape',
            'page-size': 'A4',
        }

        # Convert Webpage to PDF
        try:
            pdfkit.from_url(url, output_path='content/media/zip/webpage.pdf', configuration=config, options=options)
        except:
            pass
        return redirect('http://127.0.0.1:8000/media/zip/webpage.pdf')

class ObjectDetailView(DetailView):
    model = Objects
    template_name = "objects/object.html"
    context_object_name = 'object'

    def get_context_data(self, **kwargs):
        context = super(ObjectDetailView, self).get_context_data(**kwargs)
        context.update({'wish' : Wishlist.objects.all(),})
        return context

    def post(self, request, *args, **kwargs):
        if request.POST.get('type_photo'):
            img = Images.objects.filter(note=request.POST['pk'])
            zip_uid = uuid.uuid4()
            with zipfile.ZipFile(f'content/media/zip/{zip_uid}.zip', 'w') as zipF:
                for file in img:
                    if request.POST['type_photo'] == '0':
                        zipF.write(str(file.image.file), compress_type=zipfile.ZIP_DEFLATED)
                    else:
                        watermark_with_transparency(str(file.image.file),
                                                    r'C:\Users\sboev\PycharmProjects\focuscity\content\media\obj_img\water\\' + str(
                                                        file.image.name),
                                                    r'C:\Users\sboev\PycharmProjects\focuscity\objects\logo.png',
                                                    position=(0, 0))
                        zipF.write(r'C:\Users\sboev\PycharmProjects\focuscity\content\media\obj_img\water\\' + str(
                            file.image.name), compress_type=zipfile.ZIP_DEFLATED)
                        os.remove(r'C:\Users\sboev\PycharmProjects\focuscity\content\media\obj_img\water\\' + str(
                            file.image.name))

            return redirect('http://127.0.0.1:8000/media/zip/final.zip')

        else:
            path_to_wkhtmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'

            # Define url
            url = f'http://127.0.0.1:8000/pdf?pdf_type={request.POST["pdf_type"]}&type_obj_pdf={request.POST["type_obj_pdf"]}'

            # Point pdfkit configuration to wkhtmltopdf.exe
            config = pdfkit.configuration(wkhtmltopdf=path_to_wkhtmltopdf)

            options = {
                'orientation': 'Landscape',
                'page-size': 'A4',
            }

            # Convert Webpage to PDF
            try:
                pdfkit.from_url(url, output_path='content/media/zip/webpage.pdf', configuration=config, options=options)
            except:
                pass
            return redirect('http://127.0.0.1:8000/media/zip/webpage.pdf')

def add_object(request):
    if request.method == 'POST':
        r = {}
        for k,v in request.POST.items():
            r[k] = v
        print(request.POST)
        if request.POST['adaptive'] == 'desktop':
            if r.get('flexCheckDefault-1'): r['flexCheckDefault-1'] = '1'
            if r.get('flexCheckDefault-2'): r['flexCheckDefault-2'] = '1'
            if r.get('flexCheckDefault-3'): r['flexCheckDefault-3'] = '1'
            if r.get('flexCheckDefault-4'): r['flexCheckDefault-4'] = '1'
            if r.get('flexCheckDefault-5'): r['flexCheckDefault-5'] = '1'
            if r.get('flexCheckDefault-6'): r['flexCheckDefault-6'] = '1'
            if r.get('flexCheckDefault-7'): r['flexCheckDefault-7'] = '1'
            if r.get('flexCheckDefault-8'): r['flexCheckDefault-8'] = '1'
            if r.get('flexCheckDefault-9'): r['flexCheckDefault-9'] = '1'
            if r.get('flexCheckDefault-10'): r['flexCheckDefault-10'] = '1'
            if r.get('flexCheckDefault-11'): r['flexCheckDefault-11'] = '1'
            if r.get('flexCheckDefault-12'): r['flexCheckDefault-12'] = '1'

            if not r.get('flexCheckDefault-1'): r['flexCheckDefault-1'] = '0'
            if not r.get('flexCheckDefault-2'): r['flexCheckDefault-2'] = '0'
            if not r.get('flexCheckDefault-3'): r['flexCheckDefault-3'] = '0'
            if not r.get('flexCheckDefault-4'): r['flexCheckDefault-4'] = '0'
            if not r.get('flexCheckDefault-5'): r['flexCheckDefault-5'] = '0'
            if not r.get('flexCheckDefault-6'): r['flexCheckDefault-6'] = '0'
            if not r.get('flexCheckDefault-7'): r['flexCheckDefault-7'] = '0'
            if not r.get('flexCheckDefault-8'): r['flexCheckDefault-8'] = '0'
            if not r.get('flexCheckDefault-9'): r['flexCheckDefault-9'] = '0'
            if not r.get('flexCheckDefault-10'): r['flexCheckDefault-10'] = '0'
            if not r.get('flexCheckDefault-11'): r['flexCheckDefault-11'] = '0'
            if not r.get('flexCheckDefault-12'): r['flexCheckDefault-12'] = '0'

            if not r.get('price_month'): r['price_month'] = '0'
            if not r.get('price_square_month'): r['price_square_month'] = '0'
            if not r.get('price_square_year'): r['price_square_year'] = '0'
            if not r.get('price'): r['price'] = r['price_month']
            if not r.get('price_metr'): r['price_metr'] = '0'
            if not r.get('options-3'): r['options-3'] = '0'
            if not r.get('options-4'): r['options-4'] = '0'
            if not r.get('wet_spots'): r['wet_spots'] = '0'
            if not r.get('total_area'): r['total_area'] = '0'
            if not r.get('duration'): r['duration'] = '0'
            if not r.get('bathroom'): r['bathroom'] = '0'
            if not r.get('repair'): r['repair'] = '0'
            if not r.get('cleaning'): r['cleaning'] = '0'
            if not r.get('communal'): r['communal'] = '0'
            if not r.get('nds'): r['nds'] = '0'
            if not r.get('prepayment'): r['prepayment'] = '0'
            if not r.get('deposit'): r['deposit'] = '0'
            if not r.get('one_room'): r['one_room'] = '0'
            if not r.get('ownership'): r['ownership'] = '0'
            if not r.get('encumbrance'): r['encumbrance'] = '0'
            if not r.get('ready_made_business'): r['ready_made_business'] = '0'
            if request.POST.get('number_phone_2'):
                number_two = request.POST.get('number_phone_2')
            else:
                number_two = ""

            objects = Objects(tower=request.POST.get('tower'),
                              sub_tower=request.POST.get('subtower'),
                              type_operation=request.POST.get('type-op'),
                              address=request.POST['address'],
                              property_type=request.POST['option'],
                              status=request.POST['options_status'],
                              wtcw=request.POST['options-wtcw'],
                              number_phone=request.POST['number_phone']+' '+number_two,
                              amount_remuneration=request.POST['amount_remuneration'],
                              Appoint_responsible_person=request.POST['Appoint_responsible_person'],
                              price_month=re.sub('\D', '', r.get('price_month')),
                              price_square_month=re.sub('\D', '', r.get('price_square_month')),
                              price_square_year=re.sub('\D', '', r.get('price_square_year')),
                              price=re.sub('\D', '', r.get('price')),
                              price_metr=re.sub('\D', '', r.get('price_metr')),
                              rooms=r.get('options-3'),
                              bedrooms=r.get('options-4'),
                              wet_spots=r.get('wet_spots'),
                              total_area=r.get('total_area'),
                              floor=request.POST['floor'],
                              number_of_floors=request.POST['number_of_floors'],
                              duration=r.get('duration'),
                              bathroom=r.get('bathroom'),
                              repair=r.get('repair'),
                              cleaning=r.get('cleaning'),
                              communal_apartment=r.get('communal'),
                              vat=r.get('nds'),
                              prepayment=r.get('prepayment'),
                              deposit=r.get('deposit'),
                              one_room=r.get('one_room'),
                              ownership=r.get('ownership'),
                              encumbrance=r.get('encumbrance'),
                              ready_made_business=r.get('ready_made_business'),
                              check_in=request.POST.get('check_in'),
                              departure=request.POST.get('departure'),

                              gorod_view=r.get('flexCheckDefault-1'),
                              city_view=r.get('flexCheckDefault-2'),
                              master_bedroom=r.get('flexCheckDefault-5'),
                              furniture=r.get('flexCheckDefault-3'),
                              corner=r.get('flexCheckDefault-4'),
                              kitchen_living=r.get('flexCheckDefault-6'),
                              wardrobe=r.get('flexCheckDefault-7'),
                              bed=r.get('flexCheckDefault-8'),
                              household_appliances=r.get('flexCheckDefault-9'),
                              laundry_room=r.get('flexCheckDefault-10'),
                              shower=r.get('flexCheckDefault-11'),
                              bath=r.get('flexCheckDefault-12'),
                              your_own_farm=r.get('flexCheckDefault-5'),
                              user=request.user.pk,
                              description=request.POST['desc'],
                              note=request.POST['note'],
                              plan=request.FILES['upload_plan'],
                              pdf=request.FILES['upload_pdf'],
                              x=request.POST['address_coords_x'],
                              y=request.POST['address_coords_y'],
                              youtube_url=request.POST['youtube'],
                              )

            objects.save()

            for k in request.FILES.getlist('file'):
                img = Images(note=objects, image=k)
                img.save()

        else:

            print(request.POST)
            if r.get('option13_mob'): r['option13_mob'] = '1'
            if r.get('option14_mob'): r['option14_mob'] = '1'
            if r.get('option15_mob'): r['option15_mob'] = '1'
            if r.get('option16_mob'): r['option16_mob'] = '1'
            if r.get('option17_mob'): r['option17_mob'] = '1'
            if r.get('option18_mob'): r['option18_mob'] = '1'
            if r.get('option19_mob'): r['option19_mob'] = '1'
            if r.get('option20_mob'): r['option20_mob'] = '1'
            if r.get('option21_mob'): r['option21_mob'] = '1'
            if r.get('foption22_mob'): r['foption22_mob'] = '1'
            if r.get('foption23_mob'): r['foption23_mob'] = '1'
            if r.get('foption24_mob'): r['foption24_mob'] = '1'
            if r.get('foption25_mob'): r['foption25_mob'] = '1'

            if not r.get('option13_mob'): r['option13_mob'] = '0'
            if not r.get('option14_mob'): r['option14_mob'] = '0'
            if not r.get('option15_mob'): r['option15_mob'] = '0'
            if not r.get('option16_mob'): r['option16_mob'] = '0'
            if not r.get('option17_mob'): r['option17_mob'] = '0'
            if not r.get('option18_mob'): r['option18_mob'] = '0'
            if not r.get('option19_mob'): r['option19_mob'] = '0'
            if not r.get('option20_mob'): r['option20_mob'] = '0'
            if not r.get('option21_mob'): r['option21_mob'] = '0'
            if not r.get('foption22_mob'): r['foption22_mob'] = '0'
            if not r.get('foption23_mob'): r['foption23_mob'] = '0'
            if not r.get('foption24_mob'): r['foption24_mob'] = '0'
            if not r.get('foption25_mob'): r['foption25_mob'] = '0'

            if not r.get('price_month'): r['price_month'] = '0'
            if not r.get('price_square_month'): r['price_square_month'] = '0'
            if not r.get('price_square_year'): r['price_square_year'] = '0'
            if not r.get('price'): r['price'] = r['price_month']
            if not r.get('price_metr'): r['price_metr'] = '0'
            if not r.get('options-3'): r['options-3'] = '0'
            if not r.get('options-4'): r['options-4'] = '0'
            if not r.get('wet_spots'): r['wet_spots'] = '0'
            if not r.get('total_area'): r['total_area'] = '0'
            if not r.get('duration'): r['duration'] = '0'
            if not r.get('bathroom'): r['bathroom'] = '0'
            if not r.get('repair'): r['repair'] = '0'
            if not r.get('cleaning'): r['cleaning'] = '0'
            if not r.get('communal'): r['communal'] = '0'
            if not r.get('nds'): r['nds'] = '0'
            if not r.get('prepayment'): r['prepayment'] = '0'
            if not r.get('deposit'): r['deposit'] = '0'
            if not r.get('one_room'): r['one_room'] = '0'
            if not r.get('ownership'): r['ownership'] = '0'
            if not r.get('encumbrance'): r['encumbrance'] = '0'
            if not r.get('ready_made_business'): r['ready_made_business'] = '0'
            if request.POST.get('number_phone_2'):
                number_two = request.POST.get('number_phone_2')
            else:
                number_two = ""

            objects = Objects(type_operation=request.POST.get('type-op'),
                              tower=request.POST.get('tower'),
                              sub_tower=request.POST.get('subtower'),
                              address=request.POST['address'],
                              property_type=request.POST['option'],
                              status=request.POST['options_status'],
                              wtcw=request.POST['options-wtcw'],
                              number_phone=request.POST['number_phone']+' '+number_two,
                              amount_remuneration=request.POST['amount_remuneration'],
                              Appoint_responsible_person=request.POST['Appoint_responsible_person'],
                              price_month=re.sub('\D', '', r.get('price_month')),
                              price_square_month=re.sub('\D', '', r.get('price_square_month')),
                              price_square_year=re.sub('\D', '', r.get('price_square_year')),
                              price=re.sub('\D', '', r.get('price')),
                              price_metr=re.sub('\D', '', r.get('price_metr')),
                              rooms=r.get('options-3'),
                              bedrooms=r.get('options-4'),
                              wet_spots=r.get('wet_spots'),
                              total_area=r.get('total_area'),
                              floor=request.POST['floor_mob'],
                              number_of_floors=request.POST['number_of_floors_mob'],
                              duration=r.get('duration'),
                              bathroom=r.get('bathroom'),
                              repair=r.get('repair'),
                              cleaning=r.get('cleaning'),
                              communal_apartment=r.get('communal'),
                              vat=r.get('nds'),
                              prepayment=r.get('prepayment'),
                              deposit=r.get('deposit'),
                              one_room=r.get('one_room'),
                              ownership=r.get('ownership'),
                              encumbrance=r.get('encumbrance'),
                              ready_made_business=r.get('ready_made_business'),
                              check_in=request.POST.get('check_in'),
                              departure=request.POST.get('departure'),

                              gorod_view=r.get('option13_mob'),
                              city_view=r.get('option15_mob'),
                              master_bedroom=r.get('option17_mob'),
                              furniture=r.get('option14_mob'),
                              corner=r.get('option16_mob'),
                              kitchen_living=r.get('option18_mob'),
                              wardrobe=r.get('option22_mob'),
                              bed=r.get('option19_mob'),
                              household_appliances=r.get('option20_mob'),
                              laundry_room=r.get('option24_mob'),
                              shower=r.get('option23_mob'),
                              bath=r.get('option21_mob'),
                              your_own_farm=r.get('option25_mob'),
                              user=request.user.pk,
                              description=request.POST['desc'],
                              note=request.POST['note'],
                              plan=request.FILES['upload_plan'],
                              pdf=request.FILES['upload_pdf'],
                              youtube_url=request.POST['youtube'],
                              )

            objects.save()
            for v in request.FILES.getlist('file2'):
                img = Images(note=objects, image=v)
                img.save()

        return redirect('all_objects')

    else:
        return render(request, 'objects/add_object.html', {'form': ApartmentForm, 'user':CustomUser.objects.all()})

def cat_add_object(request):
    if request.method == 'GET':
        response_data = render_to_string('objects/add_objects/temp.html', {'prop': request.GET['prop'], 'stat': request.GET['stat']})
        return HttpResponse(response_data)

def select_cat(request):
    if request.method == 'GET':
        form = ApartmentForm
        return HttpResponse({'form':form})

def filter(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            object = Objects.objects.filter(pk__contains=request.GET['number_pk'], type_operation__contains=request.GET['type_op'], property_type__contains=request.GET['type_prop'], tower__contains=request.GET['tower'], floor__range=(request.GET['floor_min'], request.GET['floor_max']), total_area__range=(request.GET['total_area_min'], request.GET['total_area_max']), gorod_view__contains=request.GET['gorod_view'], city_view__contains=request.GET['city_view'], furniture__contains=request.GET['furniture'], master_bedroom__contains=request.GET['master_bedroom'], corner__contains=request.GET['corner'], kitchen_living__contains=request.GET['kitchen_living'], wardrobe__contains=request.GET['wardrobe'], bed__contains=request.GET['bed'], household_appliances__contains=request.GET['household_appliances'], laundry_room__contains=request.GET['laundry_room'], shower__contains=request.GET['shower'], bath__contains=request.GET['bath'], your_own_farm__contains=request.GET['your_own_farm'], bedrooms__contains=request.GET['bedrooms'], rooms__contains=request.GET['rooms'], encumbrance__contains=request.GET['encumbrance'], price__range=(request.GET['price_min'], request.GET['price_max']), price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']), price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']), price_square_month__range=(request.GET['price_square_month_min'], request.GET['price_square_month_max']), price_square_year__range=(request.GET['price_square_year_min'], request.GET['price_square_year_max']), number_phone__contains=request.GET['number_phone'])
        else:
            object = Objects.objects.filter(pk__contains=request.GET['number_pk'], type_operation__contains=request.GET['type_op'], property_type__contains=request.GET['type_prop'], tower__contains=request.GET['tower'], floor__range=(request.GET['floor_min'], request.GET['floor_max']), total_area__range=(request.GET['total_area_min'], request.GET['total_area_max']), gorod_view__contains=request.GET['gorod_view'], city_view__contains=request.GET['city_view'], furniture__contains=request.GET['furniture'], master_bedroom__contains=request.GET['master_bedroom'], corner__contains=request.GET['corner'], kitchen_living__contains=request.GET['kitchen_living'], wardrobe__contains=request.GET['wardrobe'], bed__contains=request.GET['bed'], household_appliances__contains=request.GET['household_appliances'], laundry_room__contains=request.GET['laundry_room'], shower__contains=request.GET['shower'], bath__contains=request.GET['bath'], your_own_farm__contains=request.GET['your_own_farm'], bedrooms__contains=request.GET['bedrooms'], rooms__contains=request.GET['rooms'], encumbrance__contains=request.GET['encumbrance'], price__range=(request.GET['price_min'], request.GET['price_max']), price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']), price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']), price_square_month__range=(request.GET['price_square_month_min'], request.GET['price_square_month_max']), price_square_year__range=(request.GET['price_square_year_min'], request.GET['price_square_year_max']), number_phone__contains=request.GET['number_phone']).exclude(status="Сдано").exclude(status="Продано")
        paginator = Paginator(object, 5)  # Show 25 contacts per page.
        page_obj = paginator.get_page(request.GET.get('page'))
        response_data = render_to_string('objects/render_obj.html', {'objects' : page_obj, 'request': request, 'page_obj':len(object), 'type_op': request.GET['type_op']})
        response_filter = render_to_string('objects/restart_filter.html',
                                         {'request': request})
        if request.GET.get('filter_restart'):
            print(1)
            return JsonResponse({1:response_data, 2:response_filter})
        else:
            return HttpResponse(response_data)


def filtering(request):
    if request.method == 'GET':
        if request.GET['filt'] == 'По площади вниз':
            if request.GET['type'] == 'rent':
                object = Objects.objects.filter(type_operation='rent').order_by('-total_area')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.filter(type_operation='sale').order_by('-total_area')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)

        if request.GET['filt'] == 'По площади вверх':
            if request.GET['type'] == 'rent':
                object = Objects.objects.filter(type_operation='rent').order_by('total_area')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.filter(type_operation='sale').order_by('total_area')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)

        if request.GET['filt'] == 'По этажу вниз':
            if request.GET['type'] == 'rent':
                object = Objects.objects.filter(type_operation='rent').order_by('-floor')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.filter(type_operation='sale').order_by('-floor')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)

        if request.GET['filt'] == 'По этажу вверх':
            if request.GET['type'] == 'rent':
                object = Objects.objects.filter(type_operation='rent').order_by('floor')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.filter(type_operation='sale').order_by('floor')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)

        if request.GET['filt'] == 'По цене вниз':
            if request.GET['type'] == 'rent':
                object = Objects.objects.filter(type_operation='rent').order_by('-price_month')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.filter(type_operation='sale').order_by('-price')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)

        if request.GET['filt'] == 'По цене вверх':
            if request.GET['type'] == 'rent':
                object = Objects.objects.filter(type_operation='rent').order_by('price_month')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.filter(type_operation='sale').order_by('price')
                paginator = Paginator(object, 5)  # Show 25 contacts per page.
                page_obj = paginator.get_page(request.GET.get('page'))
                response_data = render_to_string('objects/render_obj.html', {'objects': page_obj, 'user': request.user, 'page_obj':len(object)})
                return HttpResponse(response_data)

def filter_ind(request):
    if request.method == 'GET':
        object = Objects.objects.filter(type_operation__contains=request.GET['type_operation'],property_type__contains=request.GET['property_type'],tower__contains=request.GET['tower'],sub_tower__contains=request.GET['sub_tower'],)
        response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
        return HttpResponse(response_data)


def add_wishlist(request):
    if request.method == 'GET':
        user = CustomUser.objects.get(pk=request.GET['user'])
        if Wishlist.objects.filter(pk_obj=request.GET['num']):
            return HttpResponse('none')
        else:
            wish = Wishlist(note=user, pk_obj=request.GET['num'])
            wish.save()
            return HttpResponse('ok')


class ObjectEditView(DetailView):
    model = Objects
    template_name = "objects/edit_obj.html"
    context_object_name = 'object'

    def get_context_data(self, **kwargs):
        context = super(ObjectEditView, self).get_context_data(**kwargs)
        context.update({'user' : CustomUser.objects.all(),
                        'images' : Images.objects.filter(note=context['object'])})
        return context

    def post(self, request, *args, **kwargs):
        print(request.POST)
        r = {}
        for k, v in request.POST.items():
            r[k] = v

        if r.get('flexCheckDefault-1'): r['flexCheckDefault-1'] = '1'
        if r.get('flexCheckDefault-2'): r['flexCheckDefault-2'] = '1'
        if r.get('flexCheckDefault-3'): r['flexCheckDefault-3'] = '1'
        if r.get('flexCheckDefault-4'): r['flexCheckDefault-4'] = '1'
        if r.get('flexCheckDefault-5'): r['flexCheckDefault-5'] = '1'
        if r.get('flexCheckDefault-6'): r['flexCheckDefault-6'] = '1'
        if r.get('flexCheckDefault-7'): r['flexCheckDefault-7'] = '1'
        if r.get('flexCheckDefault-8'): r['flexCheckDefault-8'] = '1'
        if r.get('flexCheckDefault-9'): r['flexCheckDefault-9'] = '1'
        if r.get('flexCheckDefault-10'): r['flexCheckDefault-10'] = '1'
        if r.get('flexCheckDefault-11'): r['flexCheckDefault-11'] = '1'
        if r.get('flexCheckDefault-12'): r['flexCheckDefault-12'] = '1'

        if not r.get('flexCheckDefault-1'): r['flexCheckDefault-1'] = '0'
        if not r.get('flexCheckDefault-2'): r['flexCheckDefault-2'] = '0'
        if not r.get('flexCheckDefault-3'): r['flexCheckDefault-3'] = '0'
        if not r.get('flexCheckDefault-4'): r['flexCheckDefault-4'] = '0'
        if not r.get('flexCheckDefault-5'): r['flexCheckDefault-5'] = '0'
        if not r.get('flexCheckDefault-6'): r['flexCheckDefault-6'] = '0'
        if not r.get('flexCheckDefault-7'): r['flexCheckDefault-7'] = '0'
        if not r.get('flexCheckDefault-8'): r['flexCheckDefault-8'] = '0'
        if not r.get('flexCheckDefault-9'): r['flexCheckDefault-9'] = '0'
        if not r.get('flexCheckDefault-10'): r['flexCheckDefault-10'] = '0'
        if not r.get('flexCheckDefault-11'): r['flexCheckDefault-11'] = '0'
        if not r.get('flexCheckDefault-12'): r['flexCheckDefault-12'] = '0'

        if not r.get('price_month'): r['price_month'] = '0'
        if not r.get('price_square_month'): r['price_square_month'] = '0'
        if not r.get('price_square_year'): r['price_square_year'] = '0'
        if not r.get('price'): r['price'] = r['price_month']
        if not r.get('price_metr'): r['price_metr'] = '0'
        if not r.get('options-3'): r['options-3'] = '0'
        if not r.get('options-4'): r['options-4'] = '0'
        if not r.get('wet_spots'): r['wet_spots'] = '0'
        if not r.get('total_area'): r['total_area'] = '0'
        if not r.get('duration'): r['duration'] = '0'
        if not r.get('bathroom'): r['bathroom'] = '0'
        if not r.get('repair'): r['repair'] = '0'
        if not r.get('cleaning'): r['cleaning'] = '0'
        if not r.get('communal'): r['communal'] = '0'
        if not r.get('nds'): r['nds'] = '0'
        if not r.get('prepayment'): r['prepayment'] = '0'
        if not r.get('deposit'): r['deposit'] = '0'
        if not r.get('one_room'): r['one_room'] = '0'
        if not r.get('ownership'): r['ownership'] = '0'
        if not r.get('encumbrance'): r['encumbrance'] = '0'
        if not r.get('ready_made_business'): r['ready_made_business'] = '0'
        if request.POST.get('number_phone_2'):
            number_two = request.POST.get('number_phone_2')
        else:
            number_two = ""
        if request.POST.get('no_photo'):
            objects = Objects(tower=request.POST.get('tower'), sub_tower=request.POST.get('subtower'),
                              type_operation=request.POST.get('type-op'), address=request.POST['address'],
                              property_type=request.POST['option'], status=request.POST['options_status'],
                              wtcw=request.POST['options-wtcw'], number_phone=request.POST['number_phone']+' '+number_two,
                              amount_remuneration=request.POST['amount_remuneration'],
                              Appoint_responsible_person=request.POST['Appoint_responsible_person'],
                              price_month=re.sub('\D', '', r.get('price_month')),
                              price_square_month=re.sub('\D', '', r.get('price_square_month')),
                              price_square_year=re.sub('\D', '', r.get('price_square_year')),
                              price=re.sub('\D', '', r.get('price')), price_metr=re.sub('\D', '', r.get('price_metr')),
                              rooms=r.get('options-3'), bedrooms=r.get('options-4'), wet_spots=r.get('wet_spots'),
                              total_area=r.get('total_area'), floor=request.POST['floor'],
                              number_of_floors=request.POST['number_of_floors'], duration=r.get('duration'),
                              bathroom=r.get('bathroom'), repair=r.get('repair'), cleaning=r.get('cleaning'),
                              communal_apartment=r.get('communal'), vat=r.get('nds'), prepayment=r.get('prepayment'),
                              deposit=r.get('deposit'), one_room=r.get('one_room'), ownership=r.get('ownership'),
                              encumbrance=r.get('encumbrance'), ready_made_business=r.get('ready_made_business'),
                              check_in=request.POST.get('check_in'), departure=request.POST.get('departure'),
                              gorod_view=r.get('flexCheckDefault-1'), city_view=r.get('flexCheckDefault-2'),
                              master_bedroom=r.get('flexCheckDefault-5'), furniture=r.get('flexCheckDefault-3'),
                              corner=r.get('flexCheckDefault-4'), kitchen_living=r.get('flexCheckDefault-6'),
                              wardrobe=r.get('flexCheckDefault-7'), bed=r.get('flexCheckDefault-8'),
                              household_appliances=r.get('flexCheckDefault-9'),
                              laundry_room=r.get('flexCheckDefault-10'), shower=r.get('flexCheckDefault-11'),
                              bath=r.get('flexCheckDefault-12'), your_own_farm=r.get('flexCheckDefault-5'),
                              user=request.user.pk, description=request.POST['desc'], note=request.POST['note'],
                              plan=Objects.objects.get(pk=request.POST['pk']).plan,
                              pdf=Objects.objects.get(pk=request.POST['pk']).pdf,
                              x=float(request.POST['address_coords_x'].replace(',', '.')),
                              y=float(request.POST['address_coords_y'].replace(',', '.')), )
            objects.save()
        if request.POST.get('and_photo'):
            objects = Objects(tower=request.POST.get('tower'),sub_tower=request.POST.get('subtower'),type_operation=request.POST.get('type-op'),address=request.POST['address'],property_type=request.POST['option'],status=request.POST['options_status'],wtcw=request.POST['options-wtcw'],number_phone=request.POST['number_phone'],amount_remuneration=request.POST['amount_remuneration'],Appoint_responsible_person=request.POST['Appoint_responsible_person'],price_month=re.sub('\D', '', r.get('price_month')),price_square_month=re.sub('\D', '', r.get('price_square_month')),price_square_year=re.sub('\D', '', r.get('price_square_year')),price=re.sub('\D', '', r.get('price')),price_metr=re.sub('\D', '', r.get('price_metr')),rooms=r.get('options-3'),bedrooms=r.get('options-4'),wet_spots=r.get('wet_spots'),total_area=r.get('total_area'),floor=request.POST['floor'],number_of_floors=request.POST['number_of_floors'],duration=r.get('duration'),bathroom=r.get('bathroom'),repair=r.get('repair'),cleaning=r.get('cleaning'),communal_apartment=r.get('communal'),vat=r.get('nds'),prepayment=r.get('prepayment'),deposit=r.get('deposit'),one_room=r.get('one_room'),ownership=r.get('ownership'),encumbrance=r.get('encumbrance'),ready_made_business=r.get('ready_made_business'),check_in=request.POST.get('check_in'),departure=request.POST.get('departure'),gorod_view=r.get('flexCheckDefault-1'),city_view=r.get('flexCheckDefault-2'),master_bedroom=r.get('flexCheckDefault-5'),furniture=r.get('flexCheckDefault-3'),corner=r.get('flexCheckDefault-4'),kitchen_living=r.get('flexCheckDefault-6'),wardrobe=r.get('flexCheckDefault-7'),bed=r.get('flexCheckDefault-8'),household_appliances=r.get('flexCheckDefault-9'),laundry_room=r.get('flexCheckDefault-10'),shower=r.get('flexCheckDefault-11'),bath=r.get('flexCheckDefault-12'),your_own_farm=r.get('flexCheckDefault-5'),user=request.user.pk,description=request.POST['desc'],note=request.POST['note'],plan=Objects.objects.get(pk=request.POST['pk']).plan,pdf=Objects.objects.get(pk=request.POST['pk']).pdf,x=float(request.POST['address_coords_x'].replace(',', '.')),y=float(request.POST['address_coords_y'].replace(',', '.')),)
            objects.save()
            obj = Objects.objects.get(pk=request.POST['pk'])
            for i in Images.objects.filter(note=obj):
                Images(note=objects, image=i.image).save()

        if request.POST.get('save'):
            obj = Objects.objects.get(pk=request.POST['pk'])
            obj.tower = request.POST.get('tower')
            obj.sub_tower = request.POST.get('subtower')
            obj.type_operation = request.POST.get('type-op')
            obj.address = request.POST['address']
            obj.property_type = request.POST['option']
            obj.status = request.POST['options_status']
            obj.wtcw = request.POST['options-wtcw']
            obj.number_phone = request.POST['number_phone']+' '+number_two
            obj.amount_remuneration = request.POST['amount_remuneration']
            obj.Appoint_responsible_person = request.POST['Appoint_responsible_person']
            obj.price_month = re.sub('\D', '', r.get('price_month'))
            obj.price_square_month = re.sub('\D', '', r.get('price_square_month'))
            obj.price_square_year = re.sub('\D', '', r.get('price_square_year'))
            obj.price = re.sub('\D', '', r.get('price'))
            obj.price_metr = re.sub('\D', '', r.get('price_metr'))
            obj.rooms = r.get('options-3')
            obj.bedrooms = r.get('options-4')
            obj.wet_spots = r.get('wet_spots')
            obj.total_area = r.get('total_area')
            obj.floor = request.POST['floor']
            obj.number_of_floors = request.POST['number_of_floors']
            obj.duration = r.get('duration')
            obj.bathroom = r.get('bathroom')
            obj.repair = r.get('repair')
            obj.cleaning = r.get('cleaning')
            obj.communal_apartment = r.get('communal')
            obj.vat = r.get('nds')
            obj.prepayment = r.get('prepayment')
            obj.deposit = r.get('deposit')
            obj.one_room = r.get('one_room')
            obj.ownership = r.get('ownership')
            obj.encumbrance = r.get('encumbrance')
            obj.ready_made_business = r.get('ready_made_business')
            obj.check_in = request.POST.get('check_in')
            obj.departure = request.POST.get('departure')
            obj.gorod_view = r.get('flexCheckDefault-1')
            obj.city_view = r.get('flexCheckDefault-2')
            obj.master_bedroom = r.get('flexCheckDefault-5')
            obj.furniture = r.get('flexCheckDefault-3')
            obj.corner = r.get('flexCheckDefault-4')
            obj.kitchen_living = r.get('flexCheckDefault-6')
            obj.wardrobe = r.get('flexCheckDefault-7')
            obj.bed = r.get('flexCheckDefault-8')
            obj.household_appliances = r.get('flexCheckDefault-9')
            obj.laundry_room = r.get('flexCheckDefault-10')
            obj.shower = r.get('flexCheckDefault-11')
            obj.bath = r.get('flexCheckDefault-12')
            obj.your_own_farm = r.get('flexCheckDefault-5')
            obj.user = request.user.pk
            obj.description = request.POST['desc']
            obj.note = request.POST['note']
            obj.x = float(request.POST['address_coords_x'].replace(',', '.'))
            obj.y = float(request.POST['address_coords_y'].replace(',', '.'))
            for v in request.FILES.getlist('file2'):
                img = Images(note=obj, image=v)
                img.save()


            if request.FILES.get('upload_plan'):
                obj.plan = request.FILES.get('upload_plan')
            if request.FILES.get('upload_pdf'):
                obj.pdf = request.FILES.get('upload_pdf')
            obj.save()
        return redirect('all_objects')
def delete_obj(request):
    Objects.objects.filter(pk=request.GET['obj_id']).delete()
    return redirect('all_objects')

def edit_status(request):
    if request.GET:
        obj = Objects.objects.get(pk=request.GET['pk'])
        if request.GET['type'] == 'rent':
            if request.GET['status'] == 'Сдается':
                obj.status = 'Сдано'
                obj.save()
                return HttpResponse('<button type="button" class="btn btn-dark button-output-4" onclick="edit_status' + f"('Сдано', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Сдано</button>')
            else:
                obj.status = 'Сдается'
                obj.save()
                return HttpResponse('<button type="button" class="btn btn-dark button-output-4" onclick="edit_status' + f"('Сдается', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Сдается</button>')
        else:
            if request.GET['status'] == 'Продается':
                obj.status = 'Продано'
                obj.save()
                return HttpResponse('<button type="button" class="btn btn-dark button-output-4" onclick="edit_status' + f"('Продано', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Продано</button>')
            else:
                obj.status = 'Продается'
                obj.save()
                return HttpResponse('<button type="button" class="btn btn-dark button-output-4" onclick="edit_status' + f"('Продается', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Продается</button>')

def delete_photo(request):
    if request.GET:
        Images.objects.get(pk=request.GET['num']).delete()
        return HttpResponse('ok')


def edit_status_ind(request):
    if request.GET:
        obj = Objects.objects.get(pk=request.GET['pk'])
        if request.GET['type'] == 'rent':
            if request.GET['status'] == 'Сдается':
                obj.status = 'Сдано'
                obj.save()
                return HttpResponse('<button type="button" class="btn button-ind-download" onclick="edit_status' + f"('Сдано', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Сдано</button>')
            else:
                obj.status = 'Сдается'
                obj.save()
                return HttpResponse('<button type="button" class="btn button-ind-download" onclick="edit_status' + f"('Сдается', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Сдается</button>')
        else:
            if request.GET['status'] == 'Продается':
                obj.status = 'Продано'
                obj.save()
                return HttpResponse('<button type="button" class="btn button-ind-download" onclick="edit_status' + f"('Продано', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Продано</button>')
            else:
                obj.status = 'Продается'
                obj.save()
                return HttpResponse('<button type="button" class="btn button-ind-download" onclick="edit_status' + f"('Продается', { request.GET['pk'] }, '{ request.GET['type'] }');" + '">Продается</button>')

def modalslider(request):
    if request.GET:
        object = Objects.objects.get(pk=request.GET['pk'])
        response_data = render_to_string('objects/render-slider-modal.html', {'object': object})
        return HttpResponse(response_data)
