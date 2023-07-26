import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name:any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showMenu(){
    event.preventDefault();
    
    let $menu = document.getElementById('mobile-menu-list');
    
    if($menu.style.display==='block')
    {
     $menu.style.display='none';
     
    }else{
      $menu.style.display='block';
     
    }

  }

  navigate(url){
    this.showMenu()
    this.router.navigateByUrl(url)
  }

}
