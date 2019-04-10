import { browser, element, by } from 'protractor';

export class TodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNewTodo() {
    return element.all(by.css('input.new-todo'));
  }

  getNewTodoPlaceholder() {
    return element(by.css('input.new-todo')).getAttribute('placeholder');
  }

}
