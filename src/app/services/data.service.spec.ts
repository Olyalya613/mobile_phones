import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService, User } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  const base = 'https://jsonplaceholder.typicode.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should GET users and return mocked data', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
      { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
    ];

    let actual: User[] | undefined;
    service.getUsers().subscribe(users => (actual = users));

    const req = httpMock.expectOne(`${base}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);

    expect(actual).toEqual(mockUsers);
  });

  it('should propagate HTTP error', () => {
    let status: number | undefined;

    service.getUsers().subscribe({
      next: () => fail('next must not be called'),
      error: (err) => (status = err.status),
    });

    const req = httpMock.expectOne(`${base}/users`);
    req.flush({ message: 'Boom' }, { status: 500, statusText: 'Server Error' });

    expect(status).toBe(500);
  });
});
