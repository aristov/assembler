describe('HTML shim', () => {
    it('HTMLAnchorElement', () => {
        assert(HTMLAnchorElement.hasOwnProperty('href'), 'href');
    })
})
