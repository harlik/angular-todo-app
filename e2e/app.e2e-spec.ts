import { TodoAppPage } from './app.po';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('should have header Todos', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todos');
  });
});
