export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  name: String;
  rows: String;
  placeholder: String;
  formatted: Boolean;

  constructor(_id, type, pageId, size= '1', text = 'text', width = '100%', url = 'url', name = 'name',
              rows = '1', placeholder = 'placeholder', formatted = false) {
    this._id = _id;
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.name = name;
    this.rows = rows;
    this.placeholder = placeholder;
    this.formatted = formatted;
  }
}
