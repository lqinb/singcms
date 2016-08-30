/**
 *前端处理 
**/

var login = {
    check : function(){
        var username=$('input[name="username"]').val();
        var password=$('input[name="password"]').val();
        var url="/index.php?m=admin&c=login&a=check";
        var data={'username':username,'password':password};
        $.post(url,data,function(result){
            if(result.status==0){
                return dialog.error(result.message);
            }
            if(result.status==1){
                return dialog.success(result.message,'index.php?m=admin&c=index');
            }
            
        },'JSON');
        
    }
    
}