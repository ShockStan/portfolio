import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('one=>atTop,two=>atTop,three=>atTop,atLast=>*,two=>one,three=>two,three=>one', slideTo('top') ),
    transition('* => atLast,atTop=>*,one=>two,one=>three,two=>three', slideTo('bottom') ),
  ]);

  function slideTo(direction: string) {
    const optional = { optional: true };
    const verticalDirection = direction === 'top' ? 'top' : 'bottom';
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          [verticalDirection]: 0,
          height: '100%',
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [verticalDirection]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('450ms linear', style({ [verticalDirection]: '100%', opacity:0}))
        ], optional),
        query(':enter', [
          animate('450ms linear', style({ [verticalDirection]: '0%', opacity:1}))
        ])
      ])
    ];
  }