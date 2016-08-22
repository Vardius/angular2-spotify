describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual("Spotify App");
  });

  it('should have <header>', () => {
    expect(element(by.css('my-app header')).isPresent()).toEqual(true);
  });

  it('should have <navbar>', () => {
    expect(element(by.css('my-app navbar')).isPresent()).toEqual(true);
  });
});
