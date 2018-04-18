/*jshint esversion: 6 */
import React from 'react';
import AddBookShelfItem  from './add_bookshelf_item';


class addtoBookShelf extends React.Component {
  constructor(props){
    super(props);
      this.state = {clicked: false};
      this.toggle = this.toggle.bind(this);
  }

  toggle(e){
    this.setState({clicked: !this.state.clicked});
  }


  render(){

      if(this.state.clicked === false){
        return(
        <div>
            <button onClick={this.toggle} className='book-bs-selector'>Add to Bookshelf</button>
        </div>
        );
      } else {
        return(
          <div>
              <button onClick={this.toggle} className='book-bs-selector'>Add to Bookshelf</button>
              <div className= 'add-shelves-modal'>
                {this.props.bookShelfInfo.map((el) => {
                return <AddBookShelfItem book={this.props.book} name={el[0]} id={el[1]} button={el[2]}></AddBookShelfItem>;
                })}
              </div>
          </div>
      );
      }

    }



}
export default addtoBookShelf;




//  <button className='book-bs-selector'>Want to Read</button>
