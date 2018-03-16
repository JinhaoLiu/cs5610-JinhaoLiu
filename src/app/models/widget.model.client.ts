export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;

  constructor(_id, type, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
    this._id = _id;
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }
}
