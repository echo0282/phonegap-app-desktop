function initFileMenu() {
    var Menu = remote.require('menu');
    var MenuItem = remote.require('menu-item');
    var template = getMenuTemplate();

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

function getMenuTemplate() {
    var template = [
        {
            label: 'Electron',
            submenu: [
                {
                    label: 'About PhoneGap',
                    click: function() {
                        aboutContent();
                    }
                },
                {
                    label: 'Quit PhoneGap',
                    accelerator: 'Command+Q',
                    click: function() {
                        quitApp();
                    }
                }
            ]
        },
        {
            label: 'File',
            submenu: [
                {
                    label: 'Create new project',
                    accelerator: 'CmdOrCtrl+N',
                    click: function() {
                        $("#createProject").trigger('click');
                    }
                },
                {
                    label: 'Add existing project',
                    accelerator: 'CmdOrCtrl+O',
                    click: function() {
                        $("#openProject").trigger('click');
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Tutorials',
                    click: function() {
                        openTutorials();
                    }
                },
                {
                    label: 'Report Issue',
                    click: function() {
                        openIssueTracker();
                    }
                },
                {
                    label: 'Terms of Use',
                    click: function() {
                        openTermsOfUse();
                    }
                },
                {
                    label: 'Privacy Policy',
                    click: function() {
                        openPrivacyPolicy();
                    }
                }
            ]
        }
    ];

    return template;
}
