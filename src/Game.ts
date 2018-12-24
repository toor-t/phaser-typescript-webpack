/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>
/// <reference path="../node_modules/phaser/typescript/pixi.d.ts"/>
'use strict';
import * as Phaser from 'phaser';
import Config from './config';

export class Game {
	protected game: Phaser.Game;
	protected logo: Phaser.Sprite;
	protected cursors: Phaser.CursorKeys;

	constructor() {
		this.game = new Phaser.Game(Config.width, Config.height, Phaser.AUTO, "content", this);
	}

	preload() {
		this.game.load.image("logo", "./assets/images/logo.png");
	}

	create() {
		this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
		this.logo.anchor.setTo(0.5, 0.5);
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	update() {
		this.game.input.update();

		if (this.cursors.down.isDown) {
			this.logo.position.y += 10;
			if (this.logo.position.y >= this.game.world.height) {
				this.logo.position.y = this.game.world.height;
			}
		}
		if (this.cursors.up.isDown) {
			this.logo.position.y -= 10;
			if (this.logo.position.y <= 0) {
				this.logo.position.y = 0;
			}
		}
		if (this.cursors.left.isDown) {
			this.logo.position.x -= 10;
			if (this.logo.position.x <= 0) {
				this.logo.position.x = 0;
			}
		}
		if (this.cursors.right.isDown) {
			this.logo.position.x += 10;
			if (this.logo.position.x >= this.game.world.width) {
				this.logo.position.x = this.game.world.width;
			}
		}
	}
}
