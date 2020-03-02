import React from 'react'
import s from './Slider1.module.css'

class Slider1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: ['https://dobrewiadomosci.net.pl/wp-content/uploads/2019/01/nature-benefits.jpg.860x0_q70_crop-scale.jpg',
                'https://everything-voluntary.com/wp-content/uploads/2020/02/waterfall2.jpg',
                'https://store-images.s-microsoft.com/image/apps.26620.13682773009232620.62a18cea-40b3-43f1-811b-46ef9d15331b.96a2c700-d04f-4128-b94c-596de2c4cc83?mode=scale&q=90&h=1080&w=1920',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_D70UXHrtbx2nqmFcXtMDrwotozdQpGiL37OB0lIgv-LRGI9j',
                'https://dobrewiadomosci.net.pl/wp-content/uploads/2019/01/nature-benefits.jpg.860x0_q70_crop-scale.jpg',
            ],
            currentIndex: 0

          }

    }

    clickToNext = (currentIndex) => {
        currentIndex = this.state.currentIndex
        let newIndex = currentIndex  
         if ((currentIndex < this.state.images.length-1) && !(currentIndex === this.state.images.length-1)) {
            newIndex = this.setState({currentIndex:currentIndex + 1  })
         }
         return newIndex      
    }
    clickToPrev = (currentIndex) => {
        currentIndex = this.state.currentIndex
        let newIndex = currentIndex  
        if ((currentIndex <= this.state.images.length) && (currentIndex > 0)) {
           newIndex = this.setState({currentIndex:currentIndex - 1  })
        }
        return newIndex        
    }


    buttonOnClick = (e) => {
        if (e.target.dataset.direction === 'next') {
            return this.clickToNext()
         } else if (e.target.dataset.direction === 'prev') {
            return this.clickToPrev()
         } else (alert ('error!'))     
    }

    render() {
        return (
            <div className={s.slider1_wrapper}>
                <div className={s.header}>
                    Slider 1 <br/>
                    <span>(simple version)</span> 
                    </div>    
                <div className={s.slider1}>
                    <div className={s.prev}>
                        <button disabled={this.state.currentIndex === 0} data-direction='prev' onClick={this.buttonOnClick}>prev</button>
                    </div>
                    <div className={s.images}>
                        <img src={this.state.images[this.state.currentIndex]} alt='photoslider'/>
                    </div>
                    <div className={s.next}>
                        <button disabled={this.state.currentIndex === this.state.images.length - 1}  data-direction='next' onClick={this.buttonOnClick}>next</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Slider1