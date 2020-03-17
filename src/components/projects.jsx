import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/password.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 01</a></h3>
											<span>Random Password Generator</span>
											<p className="icon">
												<span><a href="https://alexpr704.github.io/password/"><i className="card-footer-item" />Preview </a></span>
												<span><a href="https://github.com/AlexPR704/password.git"><i className="card-footer-item" /> Source</a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/image1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 02</a></h3>
											<span>Work Day Scheduler</span>
											<p className="icon">
												<span><a href="https://alexpr704.github.io/scheduler/"><i className="card-footer-item" />Preview </a></span>
												<span><a href="https://github.com/AlexPR704/scheduler.git"><i className="card-footer-item" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/drinkybirdtextupdate.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 03</a></h3>
											<span>Drinky Bird Project</span>
											<p className="icon">
												<span><a href="https://argent-t.github.io/Drinky-Bird/"><i className="card-footer-item" />Preview </a></span>
												<span><a href="https://github.com/Argent-T/Project-1"><i className="card-footer-item" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/searches.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Weather App</span>
											<p className="icon">
												<span><a href="https://alexpr704.github.io/weatherApp/"><i className="card-footer-item" />Preview </a></span>
												<span><a href="https://github.com/AlexPR704/weatherApp/"><i className="card-footer-item" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/burger.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Eat-Da-Burger</span>
											<p className="icon">
												<span><a href="https://mysterious-temple-94788.herokuapp.com/"><i className="card-footer-item" />Preview </a></span>
												<span><a href="https://alexpr704.github.io/Eat-Da-Burger/"><i className="card-footer-item" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/project2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Nutrition Journal Project 2</span>
											<p className="icon">
												<span><a href="https://salty-ravine-80275.herokuapp.com/"><i className="card-footer-item" />Preview </a></span>
												<span><a href="https://github.com/Sharonyel/project2"><i className="card-footer-item" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
