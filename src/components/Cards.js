import React from 'react'

export default function Cards() {
    return (
        <div className="card-container">
            <div className="project-card">
                <div 
                    className="image" 
                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1619505321710-651a8ea9585b?ixlib=rb-1.2.1)'}}>
                </div>
                <header>Services</header>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod optio reiciendis ipsum impedit! Tenetur quis reprehenderit iure est explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident beatae nihil hic omnis inventore, iusto commodi! Officiis omnis sed quo, eveniet corrupti saepe odio!</p>
            </div>
            <div className="project-card">
                <div 
                    className="image" 
                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1639864191883-e9264c079517?ixlib=rb-1.2.1)'}}>
                </div>
                <header>Testing Lab</header>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod optio reiciendis ipsum impedit! Tenetur quis reprehenderit iure est explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident beatae nihil hic omnis inventore, iusto commodi! Officiis omnis sed quo, eveniet corrupti saepe odio!</p>
            </div>
            <div className="project-card">
                <div 
                    className="image" 
                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1619114943404-3e80cb30c0fb?ixlib=rb-1.2.1)'}}>
                </div>
                <header>Building Material</header>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod optio reiciendis ipsum impedit! Tenetur quis reprehenderit iure est explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident beatae nihil hic omnis inventore, iusto commodi! Officiis omnis sed quo, eveniet corrupti saepe odio!</p>
            </div>
            <div className="project-card">
                <div 
                    className="image" 
                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1641760378661-6f290a50a62d?ixlib=rb-1.2.1)'}}>
                </div>
                <header>Architecture</header>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quod optio reiciendis ipsum impedit! Tenetur quis reprehenderit iure est explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident beatae nihil hic omnis inventore, iusto commodi! Officiis omnis sed quo, eveniet corrupti saepe odio!</p>
            </div>
        </div>
    )
}
