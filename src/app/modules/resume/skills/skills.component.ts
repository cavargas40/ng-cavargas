import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: Array<any> = [
    {
      name: 'Angular',
      type: 'Frontend',
      percentage: '100',
      img: 'angular.svg'
    },
    { name: 'React', type: 'Frontend', percentage: '90', img: 'react.svg' },
    { name: 'Vue js', type: 'Frontend', percentage: '80', img: 'vue.png' },
    { name: 'Nodejs', type: 'Backend', percentage: '100', img: 'nodejs.png' },
    { name: 'Adonisjs', type: 'Backend', percentage: '90', img: 'adonis.png' },
    { name: 'Golang', type: 'Backend', percentage: '85', img: 'golang.png' },
    { name: 'SQL', type: 'Backend', percentage: '100', img: 'sql.svg' },
    {
      name: 'Mongo DB',
      type: 'Backend',
      percentage: '100',
      img: 'mongodb.svg'
    },
    {
      name: 'Microservices',
      type: 'Backend',
      percentage: '95',
      img: 'microservices.png'
    },
    { name: 'Redis', type: 'Backend', percentage: '90', img: 'redis.svg' },
    { name: 'Jenkins', type: 'General', percentage: '70', img: 'jenkins.png' },
    { name: 'Git', type: 'General', percentage: '100', img: 'git.png' },
    { name: 'Docker', type: 'General', percentage: '95', img: 'docker.svg' },
    { name: 'Jira', type: 'General', percentage: '90', img: 'jira.png' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
