import { FirstApplicationPage } from './app.po';

describe('first-application App', function() {
  let page: FirstApplicationPage;

  beforeEach(() => {
    page = new FirstApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
