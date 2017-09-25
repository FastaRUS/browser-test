// CEF browser
let menu;

mp.events.add('guiReady', () => {
    if (!menu) {
        // Creating CEF browser
        menu = mp.browsers.new('package://myServer/browser/index.html');
        // Init menus and events when browser ready
        mp.events.add('browserDomReady', (browser) => {
            if (browser == menu) {
                //Print help message to chat
                mp.gui.execute(`insertMessageToChat('<div style="background-color: rgba(0, 0, 0, 0.75); font-size: 1.0vw; padding: 6px; color: #ff0000; font-weight: 600;">Press M for open freeroam menu.</div>', 'true');`);
            }
        });
    }
});