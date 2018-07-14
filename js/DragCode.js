
//监听器添加
function listenEvent(eventTarget,eventType,eventHandler){
	if(eventTarget.addEventListener){    //主流
		eventTarget.addEventListener(eventType,eventHandler,false);
	}else if(eventTarget.attachEvent){   //IE
		eventType = "on" + "eventType";
		eventTarget.attachEvent(eventType,eventHandler);
	}else{  //IE 5
		eventTarget["on"+eventType] = eventHandler;
	}
}

//取消事件
function cancelEvent(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValues = false;
	}
}

//取消传递
function cancelPropagation(evt){
	if(evt.stopPropagation){
		evt.stopPropagation();
	}else{
		evt.cancelBubble = true;
	}
}

function dragOver(evt){
	if(evt.preventDefault) evt.preventDefault();
	evt = evt || window.event;
	evt.dataTransfer.dropEffect = "copy";
	return false;
}

window.onload = function(){
	var target = document.getElementById('drop');
	listenEvent(target,"dragenter",cancelEvent);
	listenEvent(target,"dragover",dragOver);
	listenEvent(target,"drop",function(evt){
		cancelPropagation(evt);
		evt = evt || window.event;
		evt.dataTransfer.dropEffect = 'copy';
		var id = evt.dataTransfer.getData("Text");
		target.appendChild(document.getElementById(id));
	});

	var item = document.getElementById('item');
	item.setAttribute("draggable","true");
	listenEvent(item,"dragstart",function(evt){
		evt = evt || window.event;
		evt.dataTransfer.effectAllowed = 'copy';
		evt.dataTransfer.setData("Text",item.id);
	});
};
