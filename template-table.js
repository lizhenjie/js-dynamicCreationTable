(function () {

    var _showCloseMenu;//是否显示关闭按钮
    var _showDelMenu;//显示删除按钮
    var _tableId = "myTable";//设置tableId
    var _tableClassName = "myTable";//设置tableClassName
    var _tbTop=0;// 0代表显示 1,代表不显示

    var CLOSSSTR='<span class="close close-resbox" onclick="" name="topClose">关闭</span>';

    HtmlTable.prototype.setShowCloseMenu = function (showCloseMenu) {
        _showCloseMenu = showCloseMenu;
    }

    HtmlTable.prototype.setShowDelMenu = function (showCloseMenu) {
        _showDelMenu = showDelMenu;
    }


    HtmlTable.prototype.setTableId = function (tableId) {
        this._tableId = tableId;
    }
    HtmlTable.prototype.setTableClassName = function (tableClassName) {
        this._tableClassName = tableClassName;
    }

    HtmlTable.prototype.setTbTop = function (tbTop) {
        _tbTop = tbTop;
    }
    /**
     * 获取td标签内容集合
     * @param {Array[0][tdValue]} val 
     */
    HtmlTable.prototype.createTdTag = function (val) {
        return getHtmlTrByTag(val, "td");
    }

    /**
     * 获取th标签内容集合
     * @param {Array[0][tdValue]} val 
     */
    HtmlTable.prototype.createThTag = function (val) {
        return getHtmlTrByTag(val, "th");
    }

    //<tr class="closetr"><td colspan="7"><span class="group">表名等基本信息</span><span class="close close-resbox" onclick="">关闭</span></td></tr>
    function getHtmlTrByTag(val, tag) {
        var trs_str = "";
        var index = 0;
        if(_showCloseMenu==false){
            CLOSSSTR=""
        }
        for (v in val) {
            var valArr = val[v];
            var tds_str = "";
            for (tdValue in valArr) {
                var style=' style="display:none;" ';
                if(valArr[tdValue]._hide==false){
                    style="";
                }
                if (index == 0) {
                    tds_str += "<" + tag + style+" colspan='" + valArr[tdValue].getTdColSpanNum() + "' rowspan='" + valArr[tdValue].getTdRowSpanNum() + "'>" + "<span class='group'>" + valArr[tdValue].getTdValue() + "</span>" +CLOSSSTR + "</" + tag + ">"
                } else {
                    tds_str += "<" + tag + style+ " colspan='" + valArr[tdValue].getTdColSpanNum() + "' rowspan='" + valArr[tdValue].getTdRowSpanNum() + "'>" + valArr[tdValue].getTdValue() + "</" + tag + ">"
                }
            }
            //判断是否显示table顶部的表名基本信息
            if(index==0&&_tbTop==true){
                trs_str += "<tr>" + tds_str + "</tr>";
            }else if(index!=0){
                trs_str += "<tr>" + tds_str + "</tr>";
            }
            
            index++;

        }
        return trs_str;
    }

    /**
     * 获取Table表内容集合
     * @param {*} trs_str 
     */
    HtmlTable.prototype.createTableTag = function (trs_str) {
        var table ="<table id='" + this._tableId + "' class='" + this._tableClassName + "'>" + trs_str + "</table>";
        return table;
    }
    /**
     * 获取thead
     * @param {*} trs_str 
     */
    HtmlTable.prototype.createtHeadTag = function (trs_str) {
        return "<thead>" + trs_str + "</thead>";
    }
    /**
     * 获取tbody
     * @param {*} trs_str 
     */
    HtmlTable.prototype.createtBodyTag = function (trs_str) {
        return "<tbody>" + trs_str + "</tbody>";
    }

})();
function HtmlTable() { }