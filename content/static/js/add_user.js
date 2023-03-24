function type_operation_user(num) {
    if (num == 'rent') {
        document.getElementById("type_nedv").innerHTML = "";
        $('#type_nedv').append(`
<input type="radio" class="btn-check button-add-type-4" name="user-apart-agent" id="user-apart-agent7" autocomplete="off">
<label class="btn btn-secondary button-add-type-4" for="user-apart-agent7" style="width: 120px; padding: 8px 22px;">Коворкинг</label>`)

        document.getElementById("type_nedv_mob").innerHTML = "";
        $('#type_nedv_mob').append(`
<input type="radio" class="btn-check button-add-type-4" name="user-apart-agent_mob" id="user-apart-agent3_mob" value="Офис" autocomplete="off">
                                                <label class="btn btn-secondary button-add-type-4" for="user-apart-agent3_mob" style="width: 86px;">Офис</label>
<input type="radio" class="btn-check button-add-type-4" name="user-apart-agent" value="Коворкинг" id="user-apart-agent7" autocomplete="off">
<label class="btn btn-secondary button-add-type-4" for="user-apart-agent7" style="width: 120px; padding: 8px 22px;">Коворкинг</label>`)
    } else {
        document.getElementById("type_nedv").innerHTML = "";
        $('#type_nedv_mob').append(`
<input type="radio" class="btn-check button-add-type-4" name="user-apart-agent_mob" value="Офис" id="user-apart-agent3_mob" autocomplete="off">
                                                <label class="btn btn-secondary button-add-type-4" for="user-apart-agent3_mob" style="width: 86px;">Офис</label>`)
    }
}



function add_soc(num) {
    if (num == 'vk') {
        document.getElementById('social-vk').innerHTML = '';
        $('#social-vk').append(`<div class="p-2 continer-user-agent-8">
                                            <input type="text" name="vk"  id="vk" class="form-control user-agent-input-name-inst" placeholder="Имя польз." aria-label="username" aria-describedby="addon-wrapping">
                                            <a class="text-decoration-none" onclick="add_tag_soc('vk')"><p class="continer-user-agent-8-text">Добавить</p></a>
                                            <button onclick="del_soc('vk')" style="border: none !important; background: transparent;padding: 0px !important;width: 10px; height: 44px; margin-top: -5px;">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.17334 4.99929L10.7537 1.42723C10.9105 1.27044 10.9986 1.05779 10.9986 0.836054C10.9986 0.614319 10.9105 0.401665 10.7537 0.244875C10.5969 0.0880841 10.3843 0 10.1625 0C9.94081 0 9.72815 0.0880841 9.57136 0.244875L5.99931 3.82526L2.42725 0.244875C2.27046 0.0880841 2.05781 -1.65206e-09 1.83607 0C1.61434 1.65206e-09 1.40168 0.0880841 1.24489 0.244875C1.0881 0.401665 1.00002 0.614319 1.00002 0.836054C1.00002 1.05779 1.0881 1.27044 1.24489 1.42723L4.82527 4.99929L1.24489 8.57135C1.16685 8.64875 1.10491 8.74084 1.06263 8.84231C1.02036 8.94377 0.998596 9.05261 0.998596 9.16253C0.998596 9.27244 1.02036 9.38128 1.06263 9.48274C1.10491 9.58421 1.16685 9.6763 1.24489 9.7537C1.3223 9.83175 1.41439 9.89369 1.51585 9.93596C1.61732 9.97824 1.72615 10 1.83607 10C1.94599 10 2.05482 9.97824 2.15629 9.93596C2.25775 9.89369 2.34985 9.83175 2.42725 9.7537L5.99931 6.17332L9.57136 9.7537C9.64877 9.83175 9.74086 9.89369 9.84233 9.93596C9.94379 9.97824 10.0526 10 10.1625 10C10.2725 10 10.3813 9.97824 10.4828 9.93596C10.5842 9.89369 10.6763 9.83175 10.7537 9.7537C10.8318 9.6763 10.8937 9.58421 10.936 9.48274C10.9783 9.38128 11 9.27244 11 9.16253C11 9.05261 10.9783 8.94377 10.936 8.84231C10.8937 8.74084 10.8318 8.64875 10.7537 8.57135L7.17334 4.99929Z" fill="#959697"/>
                                                </svg>
                                            </button></div>`)
    }

    if (num == 'telegram') {
        document.getElementById('social-telegram').innerHTML = '';
        $('#social-telegram').append(`<div class="p-2 continer-user-agent-8">
                                            <input type="text" name="telegram" id="telegram" class="form-control user-agent-input-name-inst" placeholder="Имя польз." aria-label="username" aria-describedby="addon-wrapping">
                                            <a class="text-decoration-none" onclick="add_tag_soc('telegram')"><p class="continer-user-agent-8-text">Добавить</p></a>
                                            <button onclick="del_soc('telegram')" style="border: none !important; background: transparent;padding: 0px !important;width: 10px; height: 44px; margin-top: -5px;">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.17334 4.99929L10.7537 1.42723C10.9105 1.27044 10.9986 1.05779 10.9986 0.836054C10.9986 0.614319 10.9105 0.401665 10.7537 0.244875C10.5969 0.0880841 10.3843 0 10.1625 0C9.94081 0 9.72815 0.0880841 9.57136 0.244875L5.99931 3.82526L2.42725 0.244875C2.27046 0.0880841 2.05781 -1.65206e-09 1.83607 0C1.61434 1.65206e-09 1.40168 0.0880841 1.24489 0.244875C1.0881 0.401665 1.00002 0.614319 1.00002 0.836054C1.00002 1.05779 1.0881 1.27044 1.24489 1.42723L4.82527 4.99929L1.24489 8.57135C1.16685 8.64875 1.10491 8.74084 1.06263 8.84231C1.02036 8.94377 0.998596 9.05261 0.998596 9.16253C0.998596 9.27244 1.02036 9.38128 1.06263 9.48274C1.10491 9.58421 1.16685 9.6763 1.24489 9.7537C1.3223 9.83175 1.41439 9.89369 1.51585 9.93596C1.61732 9.97824 1.72615 10 1.83607 10C1.94599 10 2.05482 9.97824 2.15629 9.93596C2.25775 9.89369 2.34985 9.83175 2.42725 9.7537L5.99931 6.17332L9.57136 9.7537C9.64877 9.83175 9.74086 9.89369 9.84233 9.93596C9.94379 9.97824 10.0526 10 10.1625 10C10.2725 10 10.3813 9.97824 10.4828 9.93596C10.5842 9.89369 10.6763 9.83175 10.7537 9.7537C10.8318 9.6763 10.8937 9.58421 10.936 9.48274C10.9783 9.38128 11 9.27244 11 9.16253C11 9.05261 10.9783 8.94377 10.936 8.84231C10.8937 8.74084 10.8318 8.64875 10.7537 8.57135L7.17334 4.99929Z" fill="#959697"/>
                                                </svg>
                                            </button></div>`)
    }

    if (num == 'inst') {
        document.getElementById('social-inst').innerHTML = '';
        $('#social-inst').append(`<div class="p-2 continer-user-agent-8">
                                            <input type="text" name="inst" id="inst" class="form-control user-agent-input-name-inst" placeholder="Имя польз." aria-label="username" aria-describedby="addon-wrapping">
                                            <a class="text-decoration-none" onclick="add_tag_soc('inst')"><p class="continer-user-agent-8-text">Добавить</p></a>
                                            <button onclick="del_soc('inst')" style="border: none !important; background: transparent;padding: 0px !important;width: 10px; height: 44px; margin-top: -5px;">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.17334 4.99929L10.7537 1.42723C10.9105 1.27044 10.9986 1.05779 10.9986 0.836054C10.9986 0.614319 10.9105 0.401665 10.7537 0.244875C10.5969 0.0880841 10.3843 0 10.1625 0C9.94081 0 9.72815 0.0880841 9.57136 0.244875L5.99931 3.82526L2.42725 0.244875C2.27046 0.0880841 2.05781 -1.65206e-09 1.83607 0C1.61434 1.65206e-09 1.40168 0.0880841 1.24489 0.244875C1.0881 0.401665 1.00002 0.614319 1.00002 0.836054C1.00002 1.05779 1.0881 1.27044 1.24489 1.42723L4.82527 4.99929L1.24489 8.57135C1.16685 8.64875 1.10491 8.74084 1.06263 8.84231C1.02036 8.94377 0.998596 9.05261 0.998596 9.16253C0.998596 9.27244 1.02036 9.38128 1.06263 9.48274C1.10491 9.58421 1.16685 9.6763 1.24489 9.7537C1.3223 9.83175 1.41439 9.89369 1.51585 9.93596C1.61732 9.97824 1.72615 10 1.83607 10C1.94599 10 2.05482 9.97824 2.15629 9.93596C2.25775 9.89369 2.34985 9.83175 2.42725 9.7537L5.99931 6.17332L9.57136 9.7537C9.64877 9.83175 9.74086 9.89369 9.84233 9.93596C9.94379 9.97824 10.0526 10 10.1625 10C10.2725 10 10.3813 9.97824 10.4828 9.93596C10.5842 9.89369 10.6763 9.83175 10.7537 9.7537C10.8318 9.6763 10.8937 9.58421 10.936 9.48274C10.9783 9.38128 11 9.27244 11 9.16253C11 9.05261 10.9783 8.94377 10.936 8.84231C10.8937 8.74084 10.8318 8.64875 10.7537 8.57135L7.17334 4.99929Z" fill="#959697"/>
                                                </svg>
                                            </button></div>`)
    }
}

function del_soc(num) {
    if (num == 'vk') {
        document.getElementById('social-vk').innerHTML = '';
        $('#social-vk').append(`<div class="p-2 continer-user-agent-6">
                                            <button type="button" class="btn button-user-agent" onclick="add_soc('vk')">Добавить</button>
                                            </div>`)
    }
    if (num == 'telegram') {
        document.getElementById('social-telegram').innerHTML = '';
        $('#social-telegram').append(`<div class="p-2 continer-user-agent-6">
                                            <button type="button" class="btn button-user-agent" onclick="add_soc('telegram')">Добавить</button>
                                            </div>`)
    }

    if (num == 'inst') {
        document.getElementById('social-inst').innerHTML = '';
        $('#social-inst').append(`<div class="p-2 continer-user-agent-6">
                                            <button type="button" class="btn button-user-agent" onclick="add_soc('inst')">Добавить</button>
                                            </div>`)
    }
}

function add_tag_soc(num) {
    if (num == 'vk') {
        var vk = $('#vk').val()
        document.getElementById('social-vk').innerHTML = '';
        $('#social-vk').append(`<div class="p-2 continer-user-agent-5" style="justify-content: end;">
                                            <p id="get-vk" class="continer-user-agent-5-text">@${vk}</p>
                                            <button onclick="del_soc('vk')" style="border: none !important; background: transparent;padding: 0px !important;width: 10px; height: 44px; margin-top: -5px;">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.17334 4.99929L10.7537 1.42723C10.9105 1.27044 10.9986 1.05779 10.9986 0.836054C10.9986 0.614319 10.9105 0.401665 10.7537 0.244875C10.5969 0.0880841 10.3843 0 10.1625 0C9.94081 0 9.72815 0.0880841 9.57136 0.244875L5.99931 3.82526L2.42725 0.244875C2.27046 0.0880841 2.05781 -1.65206e-09 1.83607 0C1.61434 1.65206e-09 1.40168 0.0880841 1.24489 0.244875C1.0881 0.401665 1.00002 0.614319 1.00002 0.836054C1.00002 1.05779 1.0881 1.27044 1.24489 1.42723L4.82527 4.99929L1.24489 8.57135C1.16685 8.64875 1.10491 8.74084 1.06263 8.84231C1.02036 8.94377 0.998596 9.05261 0.998596 9.16253C0.998596 9.27244 1.02036 9.38128 1.06263 9.48274C1.10491 9.58421 1.16685 9.6763 1.24489 9.7537C1.3223 9.83175 1.41439 9.89369 1.51585 9.93596C1.61732 9.97824 1.72615 10 1.83607 10C1.94599 10 2.05482 9.97824 2.15629 9.93596C2.25775 9.89369 2.34985 9.83175 2.42725 9.7537L5.99931 6.17332L9.57136 9.7537C9.64877 9.83175 9.74086 9.89369 9.84233 9.93596C9.94379 9.97824 10.0526 10 10.1625 10C10.2725 10 10.3813 9.97824 10.4828 9.93596C10.5842 9.89369 10.6763 9.83175 10.7537 9.7537C10.8318 9.6763 10.8937 9.58421 10.936 9.48274C10.9783 9.38128 11 9.27244 11 9.16253C11 9.05261 10.9783 8.94377 10.936 8.84231C10.8937 8.74084 10.8318 8.64875 10.7537 8.57135L7.17334 4.99929Z" fill="#959697"/>
                                                </svg>
                                            </button></div>`)
    }
    if (num == 'telegram') {
        var telegram = $('#telegram').val()
        document.getElementById('social-telegram').innerHTML = '';
        $('#social-telegram').append(`<div class="p-2 continer-user-agent-5" style="justify-content: end;">
                                            <p id="get-telegram" class="continer-user-agent-5-text">@${telegram}</p>
                                            <button onclick="del_soc('telegram')" style="border: none !important; background: transparent;padding: 0px !important;width: 10px; height: 44px; margin-top: -5px;">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.17334 4.99929L10.7537 1.42723C10.9105 1.27044 10.9986 1.05779 10.9986 0.836054C10.9986 0.614319 10.9105 0.401665 10.7537 0.244875C10.5969 0.0880841 10.3843 0 10.1625 0C9.94081 0 9.72815 0.0880841 9.57136 0.244875L5.99931 3.82526L2.42725 0.244875C2.27046 0.0880841 2.05781 -1.65206e-09 1.83607 0C1.61434 1.65206e-09 1.40168 0.0880841 1.24489 0.244875C1.0881 0.401665 1.00002 0.614319 1.00002 0.836054C1.00002 1.05779 1.0881 1.27044 1.24489 1.42723L4.82527 4.99929L1.24489 8.57135C1.16685 8.64875 1.10491 8.74084 1.06263 8.84231C1.02036 8.94377 0.998596 9.05261 0.998596 9.16253C0.998596 9.27244 1.02036 9.38128 1.06263 9.48274C1.10491 9.58421 1.16685 9.6763 1.24489 9.7537C1.3223 9.83175 1.41439 9.89369 1.51585 9.93596C1.61732 9.97824 1.72615 10 1.83607 10C1.94599 10 2.05482 9.97824 2.15629 9.93596C2.25775 9.89369 2.34985 9.83175 2.42725 9.7537L5.99931 6.17332L9.57136 9.7537C9.64877 9.83175 9.74086 9.89369 9.84233 9.93596C9.94379 9.97824 10.0526 10 10.1625 10C10.2725 10 10.3813 9.97824 10.4828 9.93596C10.5842 9.89369 10.6763 9.83175 10.7537 9.7537C10.8318 9.6763 10.8937 9.58421 10.936 9.48274C10.9783 9.38128 11 9.27244 11 9.16253C11 9.05261 10.9783 8.94377 10.936 8.84231C10.8937 8.74084 10.8318 8.64875 10.7537 8.57135L7.17334 4.99929Z" fill="#959697"/>
                                                </svg>
                                            </button></div>`)
    }

    if (num == 'inst') {
        var inst = $('#inst').val()
        document.getElementById('social-inst').innerHTML = '';
        $('#social-inst').append(`<div class="p-2 continer-user-agent-5" style="justify-content: end;">
                                            <p id="get-inst" class="continer-user-agent-5-text">@${inst}</p>
                                            <button onclick="del_soc('inst')" style="border: none !important; background: transparent;padding: 0px !important;width: 10px; height: 44px; margin-top: -5px;">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.17334 4.99929L10.7537 1.42723C10.9105 1.27044 10.9986 1.05779 10.9986 0.836054C10.9986 0.614319 10.9105 0.401665 10.7537 0.244875C10.5969 0.0880841 10.3843 0 10.1625 0C9.94081 0 9.72815 0.0880841 9.57136 0.244875L5.99931 3.82526L2.42725 0.244875C2.27046 0.0880841 2.05781 -1.65206e-09 1.83607 0C1.61434 1.65206e-09 1.40168 0.0880841 1.24489 0.244875C1.0881 0.401665 1.00002 0.614319 1.00002 0.836054C1.00002 1.05779 1.0881 1.27044 1.24489 1.42723L4.82527 4.99929L1.24489 8.57135C1.16685 8.64875 1.10491 8.74084 1.06263 8.84231C1.02036 8.94377 0.998596 9.05261 0.998596 9.16253C0.998596 9.27244 1.02036 9.38128 1.06263 9.48274C1.10491 9.58421 1.16685 9.6763 1.24489 9.7537C1.3223 9.83175 1.41439 9.89369 1.51585 9.93596C1.61732 9.97824 1.72615 10 1.83607 10C1.94599 10 2.05482 9.97824 2.15629 9.93596C2.25775 9.89369 2.34985 9.83175 2.42725 9.7537L5.99931 6.17332L9.57136 9.7537C9.64877 9.83175 9.74086 9.89369 9.84233 9.93596C9.94379 9.97824 10.0526 10 10.1625 10C10.2725 10 10.3813 9.97824 10.4828 9.93596C10.5842 9.89369 10.6763 9.83175 10.7537 9.7537C10.8318 9.6763 10.8937 9.58421 10.936 9.48274C10.9783 9.38128 11 9.27244 11 9.16253C11 9.05261 10.9783 8.94377 10.936 8.84231C10.8937 8.74084 10.8318 8.64875 10.7537 8.57135L7.17334 4.99929Z" fill="#959697"/>
                                                </svg>
                                            </button></div>`)
    }
}

if ($('#type_nedv_mob').css('display') == 'none') {
    $('#type_nedv_mob').append("<input type='text' name='adaptive' value='desktop' style='display:none;'/>")
} else {
    $('#type_nedv_mob').append("<input type='text' name='adaptive' value='mobile' style='display:none;'/>")
}

$('#mail').bind('input', function() {
    $('#id_username').val($(this).val())
});

$('#password').bind('input', function() {
    $('#id_password1').val($(this).val())
    $('#id_password2').val($(this).val())
});


var dt = new DataTransfer();

$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();

	for(var i = 0; i < this.files.length; i++){
		let file = this.files.item(i);
		dt.items.add(file);

		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function(){
			let new_file_input = '<div class="input-file-list-item">' +
				'<img class="input-file-list-img" src="' + reader.result + '">' +
				'<span class="input-file-list-name">' + file.name + '</span>' +
				'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
			$files_list.append(new_file_input);
		}
	};
	this.files = dt.files;
    $('#file_text_save').html(`<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.99999 18.3333H13C17.1667 18.3333 18.8333 16.6667 18.8333 12.5V7.5C18.8333 3.33334 17.1667 1.66667 13 1.66667H7.99999C3.83332 1.66667 2.16666 3.33334 2.16666 7.5V12.5C2.16666 16.6667 3.83332 18.3333 7.99999 18.3333Z" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M8 7.92499L10.5 5.42499L13 7.92499" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M10.5 5.42499V12.0917" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M5.5 13.7583C8.74167 14.8417 12.2583 14.8417 15.5 13.7583" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    Заменить`)
});

function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');
	$(target).closest('.input-file-list-item').remove();
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;
    $('#file_text_save').html(`<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.99999 18.3333H13C17.1667 18.3333 18.8333 16.6667 18.8333 12.5V7.5C18.8333 3.33334 17.1667 1.66667 13 1.66667H7.99999C3.83332 1.66667 2.16666 3.33334 2.16666 7.5V12.5C2.16666 16.6667 3.83332 18.3333 7.99999 18.3333Z" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M8 7.92499L10.5 5.42499L13 7.92499" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M10.5 5.42499V12.0917" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M5.5 13.7583C8.74167 14.8417 12.2583 14.8417 15.5 13.7583" stroke="#D19B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    Загрузить`)
}