import { BrowserWindow, Menu, Tray } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve('resources', 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Novo documento',
      click: () => {
        window.webContents.send('new-document')
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
}
