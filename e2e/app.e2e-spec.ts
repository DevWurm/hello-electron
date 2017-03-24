import { HelloElectronPage } from './app.po';

describe('hello-electron App', () => {
  let page: HelloElectronPage;

  beforeEach(() => {
    page = new HelloElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
