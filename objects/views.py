import json

from django.core import serializers
from django.core.paginator import Paginator
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.views.generic import ListView, DetailView

from objects.forms import ApartmentForm
from objects.models import Objects, Images
from users.models import CustomUser

class AllObjects(ListView):
    model = Objects
    template_name = "objects/objects.html"
    context_object_name = 'objects'
    paginate_by = 0

    def get_context_data(self, **kwargs):
        context = super(AllObjects, self).get_context_data(**kwargs)
        context.update({
            'images': Images.objects.all(),
        })
        return context
    def get(self, request, *args, **kwargs):
        if self.request.GET.get('filter') == '1':
            object = Objects.objects.filter(type_operation=request.GET.get('type'),
                                            property_type__contains=request.GET.get('apart'),
                                            tower__contains=request.GET.get('tower'),
                                            price__range=(request.GET['price_min'], request.GET['price_max']),
                                            price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']),
                                            price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']),
                                            price_square_month__range=(request.GET['price_square_month_min'],request.GET['price_square_month_max']),
                                            price_square_year__range=(request.GET['price_square_year_min'],request.GET['price_square_year_max']), )
            return render(request, 'objects/objects.html',
                          {'objects': object, 'images': Images.objects.all(), 'page_obj':len(object)})

        elif request.GET.get('filter') == '2':
                object = Objects.objects.filter(property_type__contains=request.GET.get('apart'))
                return render(request, 'objects/objects.html',
                              {'objects': object, 'images': Images.objects.all(), 'page_obj':len(object)})
        elif request.GET.get('filter') == '3':
                object = Objects.objects.filter(type_operation=request.GET.get('type'))
                return render(request, 'objects/objects.html',
                              {'objects': object, 'images': Images.objects.all(), 'page_obj':len(object)})
        else:
            obj = Objects.objects.all()
            paginator = Paginator(obj, 5)  # Show 25 contacts per page.
            page_obj = paginator.get_page(request.GET.get('page'))
            return render(request, 'objects/objects.html',
                              {'objects': page_obj, 'images': Images.objects.all(), 'page_obj':len(obj)})
def all_objects(request):
    print(request.GET)
    if request.GET.get('filter') == '1':
        object = Objects.objects.filter(type_operation=request.GET.get('type'),
                                        property_type__contains=request.GET.get('apart'),
                                        tower__contains=request.GET.get('tower'),
                                        price__range=(request.GET['price_min'], request.GET['price_max']),
                                        price_metr__range=(
                                        request.GET['price_metr_min'], request.GET['price_metr_max']),
                                        price_month__range=(
                                        request.GET['price_month_min'], request.GET['price_month_max']),
                                        price_square_month__range=(
                                        request.GET['price_square_month_min'], request.GET['price_square_month_max']),
                                        price_square_year__range=(
                                        request.GET['price_square_year_min'], request.GET['price_square_year_max']),)
        return render(request, 'objects/objects.html',
                      {'objects': object, 'images': Images.objects.all()})
    else:
        if request.GET.get('filter') == '2':
            object = Objects.objects.filter(property_type__contains=request.GET.get('apart'))
            return render(request, 'objects/objects.html',
                          {'objects': object, 'images': Images.objects.all()})
        else:
            return render(request, 'objects/objects.html',
                          {'objects': Objects.objects.all(), 'images': Images.objects.all()})

class ObjectDetailView(DetailView):
    model = Objects
    template_name = "objects/object.html"
    context_object_name = 'object'


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

            objects = Objects(tower=request.POST.get('tower'),
                              sub_tower=request.POST.get('subtower'),
                              type_operation=request.POST.get('type-op'),
                              address=request.POST['address'],
                              property_type=request.POST['option'],
                              status=request.POST['options_status'],
                              wtcw=request.POST['options-wtcw'],
                              number_phone=request.POST['number_phone'],
                              amount_remuneration=request.POST['amount_remuneration'],
                              Appoint_responsible_person=request.POST['Appoint_responsible_person'],
                              price_month=r.get('price_month'),
                              price_square_month=r.get('price_square_month'),
                              price_square_year=r.get('price_square_year'),
                              price=r.get('price'),
                              price_metr=r.get('price_metr'),
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
                              )

            objects.save()

            for k in request.FILES.getlist('file'):
                img = Images(note=objects, image=k)
                img.save()

        else:

            print(request.POST)
            if r.get('flexCheckDefault-1_mob'): r['flexCheckDefault-1_mob'] = '1'
            if r.get('flexCheckDefault-2_mob'): r['flexCheckDefault-2_mob'] = '1'
            if r.get('flexCheckDefault-3_mob'): r['flexCheckDefault-3_mob'] = '1'
            if r.get('flexCheckDefault-4_mob'): r['flexCheckDefault-4_mob'] = '1'
            if r.get('flexCheckDefault-5_mob'): r['flexCheckDefault-5_mob'] = '1'
            if r.get('flexCheckDefault-6_mob'): r['flexCheckDefault-6_mob'] = '1'
            if r.get('flexCheckDefault-7_mob'): r['flexCheckDefault-7_mob'] = '1'
            if r.get('flexCheckDefault-8_mob'): r['flexCheckDefault-8_mob'] = '1'
            if r.get('flexCheckDefault-9_mob'): r['flexCheckDefault-9_mob'] = '1'
            if r.get('flexCheckDefault-10_mob'): r['flexCheckDefault-10_mob'] = '1'
            if r.get('flexCheckDefault-11_mob'): r['flexCheckDefault-11_mob'] = '1'
            if r.get('flexCheckDefault-12_mob'): r['flexCheckDefault-12_mob'] = '1'

            if not r.get('flexCheckDefault-1_mob'): r['flexCheckDefault-1_mob'] = '0'
            if not r.get('flexCheckDefault-2_mob'): r['flexCheckDefault-2_mob'] = '0'
            if not r.get('flexCheckDefault-3_mob'): r['flexCheckDefault-3_mob'] = '0'
            if not r.get('flexCheckDefault-4_mob'): r['flexCheckDefault-4_mob'] = '0'
            if not r.get('flexCheckDefault-5_mob'): r['flexCheckDefault-5_mob'] = '0'
            if not r.get('flexCheckDefault-6_mob'): r['flexCheckDefault-6_mob'] = '0'
            if not r.get('flexCheckDefault-7_mob'): r['flexCheckDefault-7_mob'] = '0'
            if not r.get('flexCheckDefault-8_mob'): r['flexCheckDefault-8_mob'] = '0'
            if not r.get('flexCheckDefault-9_mob'): r['flexCheckDefault-9_mob'] = '0'
            if not r.get('flexCheckDefault-10_mob'): r['flexCheckDefault-10_mob'] = '0'
            if not r.get('flexCheckDefault-11_mob'): r['flexCheckDefault-11_mob'] = '0'
            if not r.get('flexCheckDefault-12_mob'): r['flexCheckDefault-12_mob'] = '0'

            if not r.get('price_month_mob'): r['price_month_mob'] = '0'
            if not r.get('price_square_month_mob'): r['price_square_month_mob'] = '0'
            if not r.get('price_square_year_mob'): r['price_square_year_mob'] = '0'
            if not r.get('price_mob'): r['price'] = r['price_month_mob']
            if not r.get('price_metr_mob'): r['price_metr_mob'] = '0'
            if not r.get('options-3_mob'): r['options-3_mob'] = '0'
            if not r.get('options-4_mob'): r['options-4_mob'] = '0'
            if not r.get('wet_spots_mob'): r['wet_spots_mob'] = '0'
            if not r.get('total_area_mob'): r['total_area_mob'] = '0'
            if not r.get('duration_mob'): r['duration_mob'] = '0'
            if not r.get('bathroom_mob'): r['bathroom_mob'] = '0'
            if not r.get('repair_mob'): r['repair_mob'] = '0'
            if not r.get('cleaning_mob'): r['cleaning_mob'] = '0'
            if not r.get('communal_mob'): r['communal_mob'] = '0'
            if not r.get('nds_mob'): r['nds_mob'] = '0'
            if not r.get('prepayment_mob'): r['prepayment_mob'] = '0'
            if not r.get('deposit_mob'): r['deposit_mob'] = '0'
            if not r.get('one_room_mob'): r['one_room_mob'] = '0'
            if not r.get('ownership_mob'): r['ownership_mob'] = '0'
            if not r.get('encumbrance_mob'): r['encumbrance_mob'] = '0'
            if not r.get('ready_made_business_mob'): r['ready_made_business_mob'] = '0'

            objects = Objects(tower=request.POST.get('tower'),
                              sub_tower=request.POST.get('subtower'),
                              type_operation=request.POST.get('type-op'),
                              address=request.POST['address'],
                              property_type=request.POST['option_mob'],
                              status=request.POST['options_status_mob'],
                              wtcw=request.POST['wtcw_mob'],
                              number_phone=request.POST['number_phone_mob'],
                              amount_remuneration=request.POST['amount_remuneration_mob'],
                              Appoint_responsible_person=request.POST['Appoint_responsible_person_mob'],
                              price_month=r.get('price_month_mob'),
                              price_square_month=r.get('price_square_month_mob'),
                              price_square_year=r.get('price_square_year_mob'),
                              price=r.get('price_mob'),
                              price_metr=r.get('price_metr_mob'),
                              rooms=r.get('options-3_mob'),
                              bedrooms=r.get('options-4_mob'),
                              wet_spots=r.get('wet_spots_mob'),
                              total_area=r.get('total_area_mob'),
                              floor=request.POST['floor_mob'],
                              number_of_floors=request.POST['number_of_floors_mob'],
                              duration=r.get('duration_mob'),
                              bathroom=r.get('bathroom_mob'),
                              repair=r.get('repair_mob'),
                              cleaning=r.get('cleaning_mob'),
                              communal_apartment=r.get('communal_mob'),
                              vat=r.get('nds_mob'),
                              prepayment=r.get('prepayment_mob'),
                              deposit=r.get('deposit_mob'),
                              one_room=r.get('one_room_mob'),
                              ownership=r.get('ownership_mob'),
                              encumbrance=r.get('encumbrance_mob'),
                              ready_made_business=r.get('ready_made_business_mob'),
                              check_in=request.POST.get('check_in_mob'),
                              departure=request.POST.get('departure_mob'),

                              gorod_view=r.get('flexCheckDefault-1_mob'),
                              city_view=r.get('flexCheckDefault-2_mob'),
                              master_bedroom=r.get('flexCheckDefault-5_mob'),
                              furniture=r.get('flexCheckDefault-3_mob'),
                              corner=r.get('flexCheckDefault-4_mob'),
                              kitchen_living=r.get('flexCheckDefault-6_mob'),
                              wardrobe=r.get('flexCheckDefault-7_mob'),
                              bed=r.get('flexCheckDefault-8_mob'),
                              household_appliances=r.get('flexCheckDefault-9_mob'),
                              laundry_room=r.get('flexCheckDefault-10_mob'),
                              shower=r.get('flexCheckDefault-11_mob'),
                              bath=r.get('flexCheckDefault-12_mob'),
                              your_own_farm=r.get('flexCheckDefault-5_mob'),
                              user=request.user.pk,
                              description=request.POST['desc'],
                              note=request.POST['note'],
                              plan=request.FILES['upload_plan_mob'],
                              pdf=request.FILES['upload_pdf_mob']
                              )

            objects.save()
            print(request.FILES)
            for k, v in request.FILES.items():
                if k != 'upload_plan_mob' and k != 'upload_pdf_mob':
                    img = Images(note=objects, image=v)
                    img.save()

        return redirect('index')

    else:
        return render(request, 'objects/add_object.html', {'form': ApartmentForm, 'user':CustomUser.objects.all()})

def cat_add_object(request):
    if request.method == 'GET':
        response_data = render_to_string('objects/add_objects/temp.html', {'prop': request.GET['prop'], 'stat': request.GET['stat']})
        return HttpResponse(response_data)

def select_cat(request):
    if request.method == 'GET':
        print(request.GET)
        form = ApartmentForm
        return HttpResponse({'form':form})

def filter(request):
    if request.method == 'GET':
        print(request.GET)
        object = Objects.objects.filter(pk__contains=request.GET['number_pk'],
                                        type_operation__contains=request.GET['type_operation'],
                                        property_type__contains=request.GET['type_prop'],
                                        tower__contains=request.GET['tower'],
                                        floor__range=(request.GET['floor_min'], request.GET['floor_max']),
                                        total_area__range=(request.GET['total_area_min'], request.GET['total_area_max']),
                                        gorod_view__contains=request.GET['gorod_view'],
                                        city_view__contains=request.GET['city_view'],
                                        furniture__contains=request.GET['furniture'],
                                        master_bedroom__contains=request.GET['master_bedroom'],
                                        corner__contains=request.GET['corner'],
                                        kitchen_living__contains=request.GET['kitchen_living'],
                                        wardrobe__contains=request.GET['wardrobe'],
                                        bed__contains=request.GET['bed'],
                                        household_appliances__contains=request.GET['household_appliances'],
                                        laundry_room__contains=request.GET['laundry_room'],
                                        shower__contains=request.GET['shower'],
                                        bath__contains=request.GET['bath'],
                                        bedrooms__contains=request.GET['bedrooms'],
                                        rooms__contains=request.GET['rooms'],
                                        encumbrance__contains=request.GET['encumbrance'],
                                        price__range=(request.GET['price_min'], request.GET['price_max']),
                                        price_metr__range=(request.GET['price_metr_min'], request.GET['price_metr_max']),
                                        price_month__range=(request.GET['price_month_min'], request.GET['price_month_max']),
                                        price_square_month__range=(request.GET['price_square_month_min'], request.GET['price_square_month_max']),
                                        price_square_year__range=(request.GET['price_square_year_min'], request.GET['price_square_year_max']),
                                        number_phone__contains=request.GET['number_phone'],
                                        )
        response_data = render_to_string('objects/render_obj.html', {'objects' : object, 'user': request.user})
        return HttpResponse(response_data)

def filtering(request):
    if request.method == 'GET':
        if request.GET['filt'] == 'По площади вниз':
            object = Objects.objects.all().order_by('-total_area')
            response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
            return HttpResponse(response_data)

        if request.GET['filt'] == 'По площади вверх':
            object = Objects.objects.all().order_by('total_area')
            response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
            return HttpResponse(response_data)

        if request.GET['filt'] == 'По этажу вниз':
            object = Objects.objects.all().order_by('-floor')
            response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
            return HttpResponse(response_data)

        if request.GET['filt'] == 'По этажу вверх':
            object = Objects.objects.all().order_by('floor')
            response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
            return HttpResponse(response_data)

        if request.GET['filt'] == 'По цене вниз':
            if request.GET['type'] == 'rent':
                object = Objects.objects.all().order_by('-price_month')
                response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.all().order_by('-price')
                response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
                return HttpResponse(response_data)

        if request.GET['filt'] == 'По цене вверх':
            if request.GET['type'] == 'rent':
                object = Objects.objects.all().order_by('price_month')
                response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
                return HttpResponse(response_data)
            else:
                object = Objects.objects.all().order_by('price')
                response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
                return HttpResponse(response_data)

def filter_ind(request):
    if request.method == 'GET':
        print(request.GET)
        object = Objects.objects.filter(type_operation__contains=request.GET['type_operation'],
                                        property_type__contains=request.GET['property_type'],
                                        tower__contains=request.GET['tower'],
                                        sub_tower__contains=request.GET['sub_tower'],
                                        )
        response_data = render_to_string('objects/render_obj.html', {'objects': object, 'user': request.user})
        return HttpResponse(response_data)


