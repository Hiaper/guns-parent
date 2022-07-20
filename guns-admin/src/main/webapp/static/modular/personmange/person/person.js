/**
 * 人员管理管理初始化
 */
var Person = {
    id: "PersonTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Person.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'username', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'sex', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'status', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hobby', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'photo', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'introduce', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Person.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Person.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加人员管理
 */
Person.openAddPerson = function () {
    var index = layer.open({
        type: 2,
        title: '添加人员管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/person/person_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看人员管理详情
 */
Person.openPersonDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '人员管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/person/person_update/' + Person.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除人员管理
 */
Person.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/person/delete", function (data) {
            Feng.success("删除成功!");
            Person.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("personId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询人员管理列表
 */
Person.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Person.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Person.initColumn();
    var table = new BSTable(Person.id, "/person/list", defaultColunms);
    table.setPaginationType("client");
    Person.table = table.init();
});
