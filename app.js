var TemplateItem = '<li role="button" class="comp">\
	<div><h3>[[= data.name ]]</h3><p>[[= data.desc ]]<br/><i style="font-weight:bold">Category: [[= data.category ]]</i></p></div>\
</li>';

$(function() {
	var itemChoosen = 0;
	$('#btnItem').on('singletap', 'li', function() { viewItem(itemChoosen); itemChoosen = 0; });
	$('.quicklinks').on('singletap', 'li', function() { itemChoosen = this.value; });

	function viewItem(filtering) {
		alert("Count this alert. Why it shown twice if I click the quicklinks?");
		var tmpItem = $.template(TemplateItem);
		$('#itemDetail').empty();

		items.forEach(function( getItem ) {
			var isAppend = false;

			if(filtering == 0) {
				isAppend = true;
			} else if(filtering == 1 && getItem.category == 'Potion') {
				isAppend = true;
			} else if(filtering == 2 && getItem.category == 'Card') {
				isAppend = true;
			} else if(filtering == 3 && getItem.category == 'Usual Item') {
				isAppend = true;
			} else if(filtering == 4 && getItem.category == 'Rune') {
				isAppend = true;
			} else if(filtering == 5 && getItem.category == 'Special Item') {
				isAppend = true;
			}

			if(isAppend) $('#itemDetail').append(tmpItem(getItem));
		});
	}
});