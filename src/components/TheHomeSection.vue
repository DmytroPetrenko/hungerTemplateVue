<template>
	<div id="home">
		<div class="menu">
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Team</li>
				<li>Booking</li>
				<li></li>
				<li>Menu</li>
				<li>Galerie</li>
				<li>Events</li>
				<li>Contact</li>
			</ul>
			<div class="vector">
				<hr />

				<img src="~@/assets/Vector.png" />

				<hr />
				<div class="vertical_lines">
					<div class="vl"></div>
					<div class="vl"></div>
					<div class="vl"></div>
				</div>
			</div>
		</div>
		<div class="main">
			<div class="schedule">
				<div class="text">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>
			</div>
			<div class="wrapper"></div>
			<div>
				<div class="title">
					<h6 class="h6">restaurant</h6>
					<h1 class="h1">hungry people</h1>
					<hr />
					<div class="buttons">
						<input class="input" type="button" value="BOOK TABLE" />
						<input class="explore input" type="button" value="EXPLORE" />
					</div>
				</div>
			</div>
			<div class="wrapper down-icon-wrapper">
				<div class="down_block">
					<div class="arrow_block">
						<font-awesome-icon :icon="['fas', 'angle-down']" />
					</div>
				</div>
			</div>

			<div class="social">
				<div class="links">
					<div class="link_wrapper">
						<font-awesome-icon :icon="['fab', 'facebook']" />
					</div>
					<div class="link_wrapper">
						<font-awesome-icon :icon="['fab', 'twitter']" />
					</div>
					<div class="link_wrapper">
						<font-awesome-icon :icon="['fab', 'instagram']" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#home {
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	background: url("~@/assets/header-bg.png");
	background-size: cover;

	.menu {
		height: 100px;
		ul {
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			li {
				color: white;
				list-style-type: none;
				text-transform: uppercase;
				font-family: "Open Sans";
				font-style: normal;
				font-weight: bold;
				font-size: 12px;
				line-height: 18px;
				padding: 41px;
				cursor: pointer;
				z-index: 1;
			}
		}
		.vector {
			position: relative;
			display: flex;
			flex-flow: row;
			justify-content: center;
			align-items: center;
			transform: translate(0, -75px);
			z-index: 0;
			hr {
				flex: 1;
				border: 1px solid rgba(255, 255, 255, 0.2);
			}
			img {
				padding: 0px 48px;
			}

			.vertical_lines {
				display: flex;
				justify-content: space-between;
				position: absolute;
				width: 849px;
				top: 76px;
				height: calc(100vh - 100px);
				.vl {
					border: 1px solid rgba(255, 255, 255, 0.2);
					height: 100%;
					z-index: -1;
				}
			}
		}
	}
	.main {
		position: relative;
		flex-basis: 200px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.schedule {
			position: absolute;
			left: 0;
			align-self: center;
			.text {
				font-family: "Open Sans";
				font-style: normal;
				font-weight: bold;
				font-size: 12px;
				line-height: 12px;
				color: #ffffff;
				transform: rotate(-90deg) translateX(-50%);
				transform-origin: 0 0;
			}
		}

		.wrapper {
			flex-grow: 1;
			flex: 1 1 33%;
		}
		.down-icon-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;

			.down_block {
				width: 60px;
				height: 60px;
				border: 1px solid rgba(255, 255, 255, 0.2);
				border-radius: 30px;
				background: url("~@/assets/header-bg.png");
				background-attachment: fixed;
				background-size: cover;
				background-position: 0 0;
				display: flex;
				justify-content: center;
				align-items: center;

				.arrow_block {
					width: 40px;
					height: 40px;
					border: 0;
					border-radius: 20px;
					background: white;
					display: flex;
					align-items: center;
					justify-content: center;
					svg {
						font-style: normal;
						font-weight: 900;
						font-size: 20px;
						line-height: 23px;
						text-decoration: none;

						color: #333333;
					}
				}
			}
		}

		.title {
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

			.h6 {
				font-family: "Open Sans";
				font-style: normal;
				font-weight: bold;
				font-size: 12px;
				line-height: 14px;
				letter-spacing: 0.5em;
				text-transform: uppercase;
			}
			.h1 {
				font-family: "Banny";
				font-size: 96px;
				line-height: 0px;
				text-transform: uppercase;
			}
			hr {
				border: 5px #e8c300 solid;
				border-radius: 50px;
				width: 60px;
				margin: 0;
			}
			.buttons {
				margin-top: 30px;

				.input {
					margin: 0 10px;
					color: #ffffff;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 12px;
					line-height: 20px;
					background: #e8c300;
					border-radius: 5px;
					border: 0;
					width: 200px;
					height: 60px;
				}
				.explore {
					border: 1px solid rgba(255, 255, 255, 0.5);
					box-sizing: border-box;
					background: none;
				}
			}
		}

		.social {
			position: absolute;
			right: 0;
			align-self: center;

			.links {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				height: 220px;
				.link_wrapper {
					width: 60px;
					height: 60px;
					border: 1px solid rgba(255, 255, 255, 0.2);
					border-radius: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					background: linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.6),
							rgba(0, 0, 0, 0.6)
						),
						url("~@/assets/header-bg.png");
					background-attachment: fixed;
					background-size: cover;
					background-position: 0 0;
					svg {
						display: block;
						color: white;
						text-decoration: none;
						font-size: 20px;
						line-height: 23px;
					}
				}
			}
		}
	}
}
</style>
