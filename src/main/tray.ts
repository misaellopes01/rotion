import { Menu, Tray, app } from 'electron'
import path from 'node:path'

app.whenReady().then(() => {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Novo documento',
      click: () => {
        console.log('safwe')
      },
    },
    { type: 'separator' },
    { label: 'Recentes', enabled: false },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+1',
    },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+2',
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOrControl+3',
    },
    { type: 'separator' },
    {
      label: 'Sair',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
})
