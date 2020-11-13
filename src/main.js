import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from './src/planets.js';

$(document).ready(function() {
  $('#personform').submit(function(event) {
    event.preventDefault();
  })

})
  
