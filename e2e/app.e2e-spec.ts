import { ScannerFrontPage } from './app.po';

describe('scanner-front App', () => {
  let page: ScannerFrontPage;

  beforeEach(() => {
    page = new ScannerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
