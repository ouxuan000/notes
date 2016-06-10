/**
 * 全屏功能模块
 */
var FullScreen = (function(exports){
    //内部逻辑
    var logic = {
        data: {},
        //状态指针
        next: function(){
            this.full.apply(this, arguments);
        },
        //全屏
        full: function(){

            var $main = jQuery("#main"),
                $mainContent = jQuery("#mainContent"),
                $forFlow = jQuery("#mainContent>div.forFlow"),
                $others = jQuery("#header,#sideBar,#footer");

            this.data.mainContentMarginLeft = $mainContent.css("marginLeft");
            this.data.contentMarginLeft = $forFlow.css("marginLeft");

            $others.hide("slow");

            $main.css({
                width: "100%",
                margin: 0,
                minWidth: 0
            });

            $mainContent.css({
                float: "none",
                margin: 0
            });

            $forFlow.css({
                margin: 0
            });

            jQuery(window).scrollTop(0);

            this.next = this.normal;
        },
        //还原
        normal: function(){
            var $main = jQuery("#main"),
                $mainContent = jQuery("#mainContent"),
                $forFlow = jQuery("#mainContent>div.forFlow"),
                $others = jQuery("#header,#sideBar,#footer");

            $others.show("slow");

            $main.css({
                width: "90%",
                margin: "50px auto 0 auto",
                minWidth: "950px"
            });

            $mainContent.css({
                float: "left",
                marginLeft: this.data.mainContentMarginLeft
            });

            $forFlow.css({
                marginLeft: this.data.contentMarginLeft
            });

            this.next = this.full;
        },
        //全屏、还原自动切换
        toggle: function(){
            this.next.apply(this, arguments);
        }
    };

    //对外接口
    return {
        full: function(){
            logic.full.apply(logic, arguments);
        },
        normal: function(){
            logic.normal.apply(logic, arguments);
        },
        toggle: function(){
            logic.toggle.apply(logic, arguments);
        }
    };

}(this));

/**
 * 监听全屏按键 Ctrl+F11
 */
jQuery(document).on("keydown", function(e){
    if(e.ctrlKey && e.keyCode === 122){
        FullScreen.toggle();
    }
});


