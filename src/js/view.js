const $ = require("jquery");
const { ipcRenderer } = require("electron");

// JQuery
$(function () {
    // �����\��
    var switchController = "robot";
    $("#title").text("���{�b�g");
    displayRobotBack();
    displayRobotButton();

    // select�Ő؂�ւ�
    $("#select_button").click(function (e) {
        if (switchController === "robot") {
            $("#title").text("�|���v");
            displayPumpBack();
            displayPumpButton();
            switchController = "pump";
        } else {
            $("#title").text("���{�b�g");
            displayRobotBack();
            displayRobotButton();
            switchController = "robot";
        }
    });

    // client�ŃN���C�A���g�N��
    $("#client_button").click(function (e) {
        ipcRenderer.send("client");
    });

    // server�ŃT�[�o�[�N��
    $("#server_button").click(function (e) {
        ipcRenderer.send("server");
    });

});

var displayRobotBack = function(){
    $("#title").addClass("color_robot");
    $("#robot").addClass("color_robot");
    $("#title").removeClass("color_pump");
    $("#pump").removeClass("color_pump");
};

var displayPumpBack = function () {
    $("#title").addClass("color_pump");
    $("#pump").addClass("color_pump");
    $("#title").removeClass("color_robot");
    $("#robot").removeClass("color_robot");
};

var displayRobotButton = function () {
    $("#label_maru").text("�X�^�[�g");
    $("#label_batsu").text("");
    $("#label_sikaku").text("�X�g�b�v");
    $("#label_sankaku").text("");
    $("#label_right").text("");
    $("#label_down").text("�X�s�[�h�_�E��");
    $("#label_left").text("");
    $("#label_up").text("�X�s�[�h�A�b�v");
    $("#label_r1").text("�`���[�u�������E");
    $("#label_r2").text("");
    $("#label_l1").text("�`���[�u��������");
    $("#label_l2").text("");
    $("#label_select").text("");
    $("#label_start").text("");
    $("#label_stick_right").text("");
    $("#label_stick_left").text("");
};

var displayPumpButton = function () {
    $("#label_maru").text("�X�^�[�g");
    $("#label_batsu").text("�ݒ�ύX");
    $("#label_sikaku").text("�X�g�b�v");
    $("#label_sankaku").text("");
    $("#label_right").text("");
    $("#label_down").text("");
    $("#label_left").text("");
    $("#label_up").text("");
    $("#label_r1").text("");
    $("#label_r2").text("");
    $("#label_l1").text("");
    $("#label_l2").text("");
    $("#label_select").text("");
    $("#label_start").text("");
    $("#label_stick_right").text("");
    $("#label_stick_left").text("");
};
