/**
 * 初始化人员管理详情对话框
 */
var PersonInfoDlg = {
    personInfoData : {}
};

/**
 * 清除数据
 */
PersonInfoDlg.clearData = function() {
    this.personInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
PersonInfoDlg.set = function(key, val) {
    this.personInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
PersonInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
PersonInfoDlg.close = function() {
    parent.layer.close(window.parent.Person.layerIndex);
}

/**
 * 收集数据
 */
PersonInfoDlg.collectData = function() {
    this
    .set('id')
    .set('username')
    .set('sex')
    .set('status')
    .set('hobby')
    .set('photo')
    .set('introduce');
}

/**
 * 提交添加
 */
PersonInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/person/add", function(data){
        Feng.success("添加成功!");
        window.parent.Person.table.refresh();
        PersonInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.personInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
PersonInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/person/update", function(data){
        Feng.success("修改成功!");
        window.parent.Person.table.refresh();
        PersonInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.personInfoData);
    ajax.start();
}

$(function() {

});
