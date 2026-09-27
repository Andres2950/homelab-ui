import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { homelabLinks } from './homelab-links';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render each homelab link with an icon', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Debian Homelab');

    const anchors = [...compiled.querySelectorAll('a')];
    expect(anchors.map((anchor) => anchor.textContent?.trim())).toEqual(
      homelabLinks.map((link) => link.title),
    );
    expect(anchors.map((anchor) => anchor.getAttribute('href'))).toEqual(
      homelabLinks.map((link) => link.url),
    );
    expect(compiled.querySelectorAll('a svg')).toHaveLength(homelabLinks.length);
  });
});
