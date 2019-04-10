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

  it('should have 1 to-do input with required placeholder', () => {
    page.navigateTo(); 
    expect(page.getNewTodo().count()).toEqual(1);
    expect(page.getNewTodoPlaceholder()).toEqual('What needs to be done?');
  });

});
