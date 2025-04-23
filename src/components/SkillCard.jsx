import React from 'react';

const SkillCard = ({name}) => {
    return (
        <div className=''>
            <span className="bg-white/5 border border-white/20 text-slate-200 rounded-full px-3 py-1 text-xs">
                {name}
            </span>
        </div>
    );
};

export default SkillCard;
