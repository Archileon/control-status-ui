/**************************************
 * �����ݒ�i���W���[���̓ǂݍ��݁j
 **************************************/
// Electron�̃��W���[��
const electron = require("electron");
// �A�v���P�[�V�������R���g���[�����郂�W���[��
const app = electron.app;
// �E�B���h�E���쐬���郂�W���[��
const BrowserWindow = electron.BrowserWindow;

/**************************************
 * ��ʋN������
 **************************************/
// ���C���E�B���h�E�̓K�x�[�W�R���N�V��������Ȃ��悤�ɃO���[�o���錾
let mainWindow;
// Electron�̏�����������Ɏ��s
app.on("ready", () => {

    // �u���E�U���쐬
    mainWindow = new BrowserWindow({ width: 1050, height: 540, useContentSize:true});
    // �����\���Ńg�b�v��ʂ�\��
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // �E�B���h�E������ꂽ��A�v�����I��
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});

/**************************************
 * �A�v���P�[�V�����I������
 **************************************/
// �S�ẴE�B���h�E��������I��
app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});

/**************************************
 * �C�x���g����
 **************************************/
const { ipcMain } = require("electron")
const child_process = require("child_process")
// �摜�o�͏���
ipcMain.on("client", (event, table) => {
    let child = child_process.execFile("python", ["src/py/client.py"], (error, stdout, stderr) => {

        if (error) {
            console.error("stderr", stderr);
            throw error;
        }
        console.log(stdout);
        console.log("pid: " + child.pid);
    });
});