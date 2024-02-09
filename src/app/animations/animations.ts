import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInTopToBottom = trigger('fadeInTopToBottom', [
    state('void', style({
        opacity: 0,
        transform: 'translateY(-100%)'
    })),
    transition('void => *', animate('1s ease-in-out')),
]);

    state('void', style({
        opacity: 0,
        transform: 'translateX(-100%)'
    })),
    transition('void => *', animate('2s ease-in-out')),
]);

export const onHover = trigger('hoverTrigger', [
    state('normal', style({
        backgroundColor: 'white',
        transform: 'scale(1)'
    })),
    state('hover', style({
        backgroundColor: 'green',
        transform: 'scale(1.2)'
    })),
    transition('normal => hover', animate('200ms ease-in')),
    transition('hover => normal', animate('200ms ease-out'))
]);