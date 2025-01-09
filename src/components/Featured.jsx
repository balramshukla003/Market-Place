import React from 'react';
import '../css/Featured.css';


const Featured = (props) => {
    const professionals = [
        { profession: props.profession1, designation: props.designation1, name: props.name1 },
        { profession: props.profession2, designation: props.designation2, name: props.name2 },
        { profession: props.profession3, designation: props.designation3, name: props.name3 },
        { profession: props.profession4, designation: props.designation4, name: props.name4 },
        { profession: props.profession5, designation: props.designation5, name: props.name5 },
        { profession: props.profession6, designation: props.designation6, name: props.name6 }
    ];

    return (
        <div className="category-outer">
            <div className="category-head">
                <h3>{props.title}</h3>
                <h4 style={{ color: 'blue' }}>See all</h4>
            </div>

            <div className="Featured-cards">
                {professionals.map((pro, index) => (
                    <div className='img-card' key={index}>
                        <img src={`data:image/jpeg;base64,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`} alt={pro.name} />
                        <p>{pro.profession}</p>
                        <h5>{pro.designation}</h5>
                        <h6 className='Naam'>{pro.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Default Props
Featured.defaultProps = {
    title: 'Featured Professionals',
    profession1: 'Web Developer',
    designation1: 'Senior Developer',
    name1: 'John Doe',
    profession2: 'Copywriter',
    designation2: 'SEO & Lead Generation Marketer',
    name2: 'Jane Smith',
    profession3: 'Graphic Designer',
    designation3: 'Creative Head',
    name3: 'Alex Johnson',
    profession4: 'Content Writer',
    designation4: 'Content Specialist',
    name4: 'Chris Evans',
    profession5: 'Data Scientist',
    designation5: 'ML Specialist',
    name5: 'Emma Stone',
    profession6: 'Product Manager',
    designation6: 'Business Strategist',
    name6: 'Michael Brown'
};

export default Featured;
