/**
 * Represents a note unit for the app
 */
export class Note {

  /**
   * Instantiate a note object
   * 
   * @param id - ID of the note
   * @param content - Content of the note
   */
  constructor(id, content) {
    this.id = id;
    this.content = content;
  };

  updateContent(newContent) {
    this.content = newContent;
  };

};