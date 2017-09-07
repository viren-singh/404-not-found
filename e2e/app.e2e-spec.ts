import { Four04NotFoundPage } from './app.po';

describe('four04-not-found App', () => {
  let page: Four04NotFoundPage;

  beforeEach(() => {
    page = new Four04NotFoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
