import React from 'react';
import Paragraph from './pharagraph';
import Slider from '../slider/slider';
import Headline from '../headline/headline';
import Quote from '../quote/quote';
import Rick from '../quote/Rick Matus_620x620.jpg';
import Gizem from '../quote/Gizem Ozkaya_620x620.jpg';
import Parallax from '../parallax/parallax';
import BigImg from './bigimg';
import TwoImg from './twoimg';
import './article.css';

const Article = (props) => {
    return (
        <div className="Container">
             <div className="Article">
                <Paragraph>William Johnson and Erin Matson knew two things going into their recent home renovation project: They wanted to brighten up their basement, and they wanted to design the space in a way that reflected their love of Hawaii.</Paragraph>
                <Paragraph>But they had no idea where to begin. Their interior designer came up with an idea to add a teal backsplash behind an espresso-slash-tiki bar—a nod to the tropics—but they hadn’t gone into the process “thinking about those sorts of elements,” said Johnson.</Paragraph>
                <Paragraph>It wasn’t until the designer showed them her vision for the basement in a 3-D visual rendering that they were sold on the idea. "It helped us see [for example], ‘Maybe that blocks that space off more than we want.' Or, 'That's great, but maybe if we tweaked [it] this way...'" said Johnson.</Paragraph>
                <Slider/>
                <Paragraph>In an increasingly visual world, technologies like 3-D renderings and VR tours allow people to picture redecorations and renovations before a home design project even begins—which helps them make more informed choices about what to do.</Paragraph>
                <Paragraph>“When we started to put together 3-D renderings, I saw a huge change in how clients made decisions,” said Rick Matus, senior vice president at D.C-based remodeling company Case Design. “It seemed easier for them to understand what we were proposing.” </Paragraph>
                <Headline>Why we love visuals</Headline>
                <Paragraph>It makes sense that customers are highly responsive to 3-D renderings, since humans are visual creatures; images have an impact on everything from what we buy to what we eat.</Paragraph>
                <Paragraph>How we react to an image depends on our perception of it, and perception is based on what we already know about something, plus any other visual cues we’re getting. (For instance: If you saw blue backsplash, you may not have the same perception of it as Johnson and Matson, who immediately thought of the Pacific ocean when they saw the tiles.)</Paragraph>
                <Paragraph>Visual cues are all subjected to "selective attention," a phenomenon that happens when our brain processes only a portion of an image; our brains tend to hone in on "some region in the scene," said neuroscientist Jan Brascamp. But looking at larger and more realistic images, like 3-D renderings or VR representations, could help us better assess those scenes, and form more accurate perceptions of details large and small.</Paragraph>
                <Quote image={Rick} name={'Rick Matus, senior vice president'}>“When we started to put together 3-D renderings, I saw a huge change in how clients made decisions.” </Quote>
                <Paragraph>Clients and designers alike are still awed by the new realm of technologically enhanced images and what it’s doing for the design process. Matus watches clients’ eyes “light up” when they see something they like in a 3-D rendering—which happens often, given how frequently Case Design uses high-quality visuals and renderings in order to plan projects. </Paragraph>
                <Headline>From renderings to reality</Headline>
                <Paragraph>Case Design’s proprietary CaseStudy® process, a collaborative method led by the company’s developers and designers, utilizes hyper-realistic visuals to ensure that plans go off without a hitch. </Paragraph>
                <Paragraph>It begins with a consultation in the client’s home, where designers first align the client’s goals and document the existing space through sketches and photos. Then, three or four 3-D renderings of the proposed redesign are created, each with a different layout and price point. And if clients want a deeper dive into a space, they can use VR headsets to explore a project model. Altogether, these steps help clients “understand what they’re getting before they commit a lot of time and money,” said Matus.</Paragraph>
                <Paragraph>For Johnson and Matson, the CaseStudy® process generated ideas they hadn’t considered before; in addition to the basement renovations, they wanted to transform what felt like a disjointed upstairs hallway into “one gigantic bathroom,” said Matson. Gizem Ozkaya, a project developer for Case Design who worked as a designer on Johnson and Matson’s project, helped create several 3-D renderings of their bathroom and basement.</Paragraph>
                <Parallax/>
                <Paragraph>In the bathroom, the couple went with Ozkaya’s ideas for an L-shaped floating vanity and tiled niches for storage in the shower wall. And it wasn’t until he saw the 3-D rendering that Johnson could envision, and decide to go forward with, a combination wine-storage-slash-workout-space in the basement.</Paragraph>
                <Paragraph>Since the project wrapped up in August 2018, the new spaces have come to feel like home.</Paragraph>
                <Paragraph>“There were design elements that they suggested and we love,” said Johnson, like that turquoise backsplash on the basement bar, and the textured stone shelves in the tub. Matson appreciates the clean lines and openness of the bathroom, and the large sink area that makes it easy for the couple to get ready in the morning without jostling for space.</Paragraph>
                <BigImg/>
                <TwoImg/>
                <Paragraph>And the basement has become one of their favorite places in the house, whether for quiet nights in or daily routines. Most mornings, Johnson heads downstairs, turns on the espresso machine and fits in a workout before meeting Matson back at the bar for coffee.</Paragraph>
                <Paragraph>“But then when it’s movie night, you can cozy [up] on the couch on the other side of the room,” Johnson said. “It’s all really open and connected and bright.”</Paragraph>
                <Headline>How tech will shape the future of design</Headline>
                <Paragraph>As Matus sees it, advanced technologies will only continue to disrupt the design field. Augmented reality tools allow people to project life-size decor and furnishings onto a space in real time, giving customers the ability to “interact” with virtual objects—changing the positioning of a sofa, for example, or comparing a freestanding tub to a shower stall in their bathroom.</Paragraph>
                <Quote image={Gizem} name={'Gizem Ozkaya, project developer'}>“It's very exciting for me to be able to create the space in a 3-D realm.”</Quote>
                <Paragraph>Some clients are still uncomfortable wearing VR goggles, according to Matus, but that could change as the technology becomes more commonplace; and once VR saturates the design market, clients will be able to walk through virtually-designed rooms, editing their decisions as they go, before they even begin a renovation project.</Paragraph>
                <Paragraph>And down the line, Matus envisions technology that allows designers to create “movies that clients can be walked through [to experience] their spaces,” he said.</Paragraph>
                <Paragraph>Ultimately, said Ozkaya, these visually-driven innovations are a boon to both clients and designers.</Paragraph>
                <Paragraph>“Lines on a piece of paper don’t really mean much to our clients,” she said. “It’s very exciting for me to be able to create the space in a 3-D realm. You’re able to actually get a visual sense of details, because a lot of these things could be missed in a 2-D platform.”</Paragraph>
             </div>
        </div>
    )
}

export default Article;