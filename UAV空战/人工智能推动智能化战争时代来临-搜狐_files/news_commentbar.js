function newsCommentBar(count, link){
    var template='<div id="newsCommentBar" class="comm-top">\
        <a title="������ҳ" href="http://sohu.com" target="_blank" class="link-sohu"></a>\
        <a title="����˵����" href="' + link +'" target="_blank" class="scroll-comm">' + count +'</a>\
        <a title="���ض���" href="javascript:;" class="scroll-top"></a>\
    </div>';

    if($("#newsCommentBar").size()>0) {
        return;
    }
    $("body").append(template);
}
