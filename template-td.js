(function () {
    var _rowSpanNum=1;//行合并数
    var _colSpanNum=1;//列合并数
    var _value='';//值
    var _hide=false;//隐藏
    THtmlTdValue.prototype.getTdRowSpanNum = function () {
        return this._rowSpanNum;
    }

    THtmlTdValue.prototype.setTdRowSpanNum = function (rowSpanNum) {
        this._rowSpanNum=rowSpanNum;
    }

    THtmlTdValue.prototype.getTdColSpanNum = function () {
        return this._colSpanNum;
    }

    THtmlTdValue.prototype.setTdColSpanNum = function (colSpanNum) {
        this._colSpanNum=colSpanNum;
    }

    THtmlTdValue.prototype.getTdValue = function () {
        return this._value;
    }

    THtmlTdValue.prototype.setTdValue = function (value) {
        this._value=value;
    }

    THtmlTdValue.prototype.getTdHide = function () {
        return this._hide;
    }

    THtmlTdValue.prototype.setTdHide = function (hide) {
        this._hide=hide;
    }
    THtmlTdValue.prototype.ValueInstance = function (rowSpanNum,colSpanNum,value,hide) {
        this._rowSpanNum=rowSpanNum;
        this._colSpanNum=colSpanNum;
        this._value=value;
        this._hide=hide;
        if(hide==undefined){
            this._hide=false
        }
    }
})();
function  THtmlTdValue(rowSpanNum,colSpanNum,value,hide){
    //调用初始化函数
    this.ValueInstance(rowSpanNum,colSpanNum,value,hide);
}
