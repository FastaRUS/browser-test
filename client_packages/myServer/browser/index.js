var index_enable = false; // флаг проверки открыто/скрыто окно со списком игроков

var css_el = document.createElement("link"); // создаем элемент подключающий css
css_el.rel = "stylesheet";
css_el.href = "assets/css/style.css";

const $container = document.querySelector('.container');

const createBox = () => {
  const $box = document.createElement('div');
  $box.classList.add('box');
  return $box;
};

$("head").append(css_el);// подключаем его в head

$.get("index.html", function( data ) { // загружаем HTML нашего модального окна
    $("body").append( data ); // вставляем его в body
  });



// Show/Hide menu
$("body").keydown(function( e ) { // событие нажания на кнопку
	if(e.which == 77){ // 9 KeyCode кнопки TAB
		if(index_enable){ // если модальное окно открыто скрываем его
			index_enable = false;
			$('.interaction_menu').hide();
		} else { 
			index_enable = true;
			const $box = createBox();
            $interaction_menu.appendChild($box);
			$('.interaction_menu').show(); // делаем его видимым
		}
		mp.invoke("focus", index_enable); // отключаем игровой процесс делаем видимым курсор (он лагучий и находится под меню)
		//курсор можно накатать свой но нам это пока не надо
	}
});