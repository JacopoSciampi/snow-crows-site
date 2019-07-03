import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

export const navbarAnimation = [
    trigger('sio1', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '150px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '150px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('sio2', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '150px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '150px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('sio3', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '150px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '150px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('sio4', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '150px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '150px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]