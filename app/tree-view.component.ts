import {Component, Input} from '@angular/core';
import {Directory} from './directory';

@Component({
    selector: 'tree-view',
    templateUrl: 'app/tree-view.component.html',
    styleUrls: ['app/tree-view.component.css'],
    directives: [TreeView]
})

export class TreeView {
    @Input() directories: Array<Directory>;
}