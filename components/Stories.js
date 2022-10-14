import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: 'Muhammad Zain Fiaz',
        src:"https://pps.whatsapp.net/v/t61.24694-24/300862989_156594573647690_7941746575302507578_n.jpg?ccb=11-4&oh=01_AVzZy7ArXwhellmGNweydXflXeqACvWK81vnYy3SFW1wlA&oe=6353734A",
        profile: 'https://pps.whatsapp.net/v/t61.24694-24/300862989_156594573647690_7941746575302507578_n.jpg?ccb=11-4&oh=01_AVzZy7ArXwhellmGNweydXflXeqACvWK81vnYy3SFW1wlA&oe=6353734A',
       
    },
    {
        name: 'elon musk',
        src:"https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg",
        profile: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
       
    }, {
        name: 'jeff bezos',
        src:"https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds",
        profile: 'https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3',
       
    }, {
        name: 'Bill Gates',
        src:"https://image.cnbcfm.com/api/v1/image/104891709-Bill_Gates_the_co-Founder.jpg?v=1558120888",
        profile: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
       
    }, {
        name: 'Warren Buffet',
        src:"https://imageio.forbes.com/specials-images/imageserve/5babb7f1a7ea4342a948b79a/0x0.jpg?format=jpg&crop=2327,2329,x748,y1753,safe&height=416&width=416&fit=bounds",
        profile: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0U5a32I81EyodYLVvHBNs7GSlBgmag51JRMz_0RQ2DqthEDKr',
       
    },
]

function Stories() {
  return (
    <div className='flex mx-auto justify-center space-x-3 '>
         {stories.map((story) => (
            <StoryCard
            src={story.src}
            name={story.name}
            profile={story.profile} />
         ))}
    </div>
  )
}

export default Stories