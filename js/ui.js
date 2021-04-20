document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    var modal = document.querySelectorAll('.modal');
    var fab = document.querySelectorAll('.fixed-action-btn');
    M.Sidenav.init(sidenav);
    M.Modal.init(modal);
    M.FloatingActionButton.init(fab);
});