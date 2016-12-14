import { HelloElectronPage } from './app.po';

describe('hello-electron App', function() {
  let page: HelloElectronPage;

  beforeEach(() => {
    page = new HelloElectronPage();
  });

  it('should display message saying Hello Electron', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Electron!');
  });
});
