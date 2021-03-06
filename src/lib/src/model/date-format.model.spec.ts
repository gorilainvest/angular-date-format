/* Own modules */
import { DateFormatEnum } from '../model/date-format.enum';
import { DateFormatModel } from '../model/date-format.model';

describe('DateFormatModel', () => {
  let model: DateFormatModel;

  beforeAll(() => {
    model = new DateFormatModel();
  });

  describe('gets brazilian date from', () => {
    it('non-brazilian date', () => {
      const expectedBrDate = '1900/01/02';
      const nonBrDate = '02-01-1900T00:00:00-02:00';
      const brDate = model.getBrazilianDate(nonBrDate);

      expect(brDate).toEqual(expectedBrDate);
    });

    it('brazilian date', () => {
      const expectedBrDate = '1900/01/02';
      let brDate = '02-01-1900T00:00:00-02:00';

      brDate = model.getBrazilianDate(brDate);

      expect(brDate).toEqual(expectedBrDate);
    });

    it('UTC non-brazilian date', () => {
      const expectedBrDate = '1900/01/02';
      const nonBrDateUTC = '02-01-1900';
      const brDate = model.getBrazilianDate(nonBrDateUTC);

      expect(brDate).toEqual(expectedBrDate);
    });

    it('UTC brazilian date', () => {
      const expectedBrDate = '1900/01/02';
      const brDateUTC = '02-01-1900';
      const brDate = model.getBrazilianDate(brDateUTC);

      expect(brDate).toEqual(expectedBrDate);
    });

    it('locale brazilian date', () => {
      const expectedBrDate = '1900/01/02';
      const localeBrDate = '02/01/1900';
      const brDate = model.getBrazilianDate(localeBrDate);

      expect(brDate).toEqual(expectedBrDate);
    });
  });

  describe('gets UTC brazilian date from', () => {
    it('non-brazilian date', () => {
      const expectedBrDateUTC = '1900/01/02';
      const nonBrDate = '02-01-1900T00:00:00-02:00';
      const brDateUTC = model.getBrazilianDate(nonBrDate, true);

      expect(brDateUTC).toEqual(expectedBrDateUTC);
    });

    it('brazilian date', () => {
      const expectedBrDateUTC = '1900/01/02';
      const brDate = '02-01-1900T00:00:00-02:00';
      const brDateUTC = model.getBrazilianDate(brDate, true);

      expect(brDateUTC).toEqual(expectedBrDateUTC);
    });

    it('UTC non-brazilian date', () => {
      const expectedBrDateUTC = '1900/01/02';
      const nonBrDateUTC = '02-01-1900';
      const brDateUTC = model.getBrazilianDate(nonBrDateUTC, true);

      expect(brDateUTC).toEqual(expectedBrDateUTC);
    });

    it('UTC brazilian date', () => {
      const expectedBrDateUTC = '1900/01/02';
      let brDateUTC = '02-01-1900';

      brDateUTC = model.getBrazilianDate(brDateUTC, true);

      expect(brDateUTC).toEqual(expectedBrDateUTC);
    });
  });

  it('gets UTC date from non-UTC date (american)', () => {
    const expectedUTCDate = '1900-2-1';
    const nonUTCDate = '1900-02-01T00:00:00-02:00';
    const resultUTCDate = model.date2UTC(nonUTCDate);

    expect(resultUTCDate).toEqual(expectedUTCDate);
  });

  it('gets UTC date from non-UTC date (brazilian)', () => {
    const expectedUTCDate = '1900-1-2';
    const nonUTCDate = '1900/01/02T00:00:00-02:00';
    const resultUTCDate = model.date2UTC(nonUTCDate);

    expect(resultUTCDate).toEqual(expectedUTCDate);
  });

  describe('gets american date from', () => {
    it('non-american date', () => {
      const expectedAmDate = '1900-01-02T00:00:00-02:00';
      const nonAmDate = '02/01/1900T00:00:00-02:00';
      const amDate = model.getAmericanDate(nonAmDate, true);

      expect(amDate).toEqual(expectedAmDate);
    });

    it('american date', () => {
      const expectedAmDate = '1900-01-02T00:00:00-02:00';
      let amDate = '02-01-1900T00:00:00-02:00';

      amDate = model.getAmericanDate(amDate, true);

      expect(amDate).toEqual(expectedAmDate);
    });

    it('UTC non-american date', () => {
      const expectedAmDate = '1900-01-02';
      const nonAmDateUTC = '02/01/1900';
      const amDate = model.getAmericanDate(nonAmDateUTC, false, true);

      expect(amDate).toEqual(expectedAmDate);
    });

    it('UTC american date', () => {
      const expectedAmDate = '1900-01-02';
      const amDateUTC = '02-01-1900';
      const amDate = model.getAmericanDate(amDateUTC, false, true);

      expect(amDate).toEqual(expectedAmDate);
    });
  });

  describe('gets UTC american date from', () => {
    it('non-american date', () => {
      const expectedAmDateUTC = '1900-01-02';
      const nonAmDate = '02/01/1900T00:00:00-02:00';
      const amDateUTC = model.getAmericanDate(nonAmDate);

      expect(amDateUTC).toEqual(expectedAmDateUTC);
    });

    it('american date', () => {
      const expectedAmDateUTC = '1900-01-02';
      const amDate = '02-01-1900T00:00:00-02:00';
      const amDateUTC = model.getAmericanDate(amDate);

      expect(amDateUTC).toEqual(expectedAmDateUTC);
    });

    it('UTC non-american date', () => {
      const expectedAmDateUTC = '1900-01-02';
      const nonAmDateUTC = '02/01/1900';
      const amDateUTC = model.getAmericanDate(nonAmDateUTC, true);

      expect(amDateUTC).toEqual(expectedAmDateUTC);
    });

    it('UTC american date', () => {
      const expectedAmDateUTC = '1900-01-02';
      let amDateUTC = '02-01-1900';

      amDateUTC = model.getAmericanDate(amDateUTC, true);

      expect(amDateUTC).toEqual(expectedAmDateUTC);
    });
  });

  describe('::string2date', () => {

    it('invalid string input', () => {
      const expected = null;
      const input = 'planeta dos gorilas';
      const result = model.string2date(input);

      expect(result).toEqual(expected);
    });

    it('input date malformatted', () => {
      const expected = null;
      const input = '01_01_2017';
      const result = model.string2date(input);

      expect(result).toEqual(expected);
    });

    it('american input date', () => {
      const input = '01-01-2017T09:00:00-02:00';
      const expected = new Date(2017, 0, 1);
      const result = model.string2date(input);

      expect(result).toEqual(expected);
    });

    it('american UTC input date', () => {
      const input = '01-01-2017';
      const expected = new Date(2017, 0, 1);
      const result = model.string2date(input);

      expect(result).toEqual(expected);
    });

    it('brazilian input date', () => {
      const input = '01/01/2017T09:00:00-02:00';
      const expected = new Date('01/01/2017');
      const result = model.string2date(input);

      expect(result).toEqual(expected);
    });

    it('brazilian UTC input date', () => {
      const input = '01/01/2017';
      const expected = new Date(input);
      const result = model.string2date(input);

      expect(result).toEqual(expected);
    });
  });

  describe('::diffDate', () => {
    it('01/01/1975 differ from 01/01/2016 by 41 years', () => {
      const expected = 41;
      const date1 = '2016/01/01';
      const date2 = '1975/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.YEAR);

      expect(diff).toEqual(expected);
    });

    it('01/01/2016 differ from 01/01/1975 by -41 years', () => {
      const expected = -41;
      const date1 = '1975/01/01';
      const date2 = '2016/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.YEAR);

      expect(diff).toEqual(expected);
    });

    it('01/01/1994 differ from 01/02/2001 by 85 months', () => {
      const expected = 85;
      const date1 = '2001/02/01';
      const date2 = '1994/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.MONTH);

      expect(diff).toEqual(expected);
    });

    it('01/01/2001 differ from 01/02/1994 by -85 months', () => {
      const expected = 85;
      const date1 = '1994/02/01';
      const date2 = '2001/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.MONTH);

      expect(diff).toEqual(expected);
    });

    it('01/01/2010 differ from 01/06/2010 by 151 days', () => {
      const expected = 151;
      const date1 = '2010/06/01';
      const date2 = '2010/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.DAY);

      expect(diff).toEqual(expected);
    });

    it('01/06/2010 differ from 01/01/2010 by -151 days', () => {
      const expected = -151;
      const date1 = '2010/01/01';
      const date2 = '2010/06/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.DAY);

      expect(diff).toEqual(expected);
    });

    it('01/01/1996 differ from 03/01/1996 by 48 hours', () => {
      const expected = 48;
      const date1 = '1996/01/03';
      const date2 = '1996/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.HOUR);

      expect(diff).toEqual(expected);
    });

    it('03/01/1996 differ from 01/01/1996 by -48 hours', () => {
      const expected = -48;
      const date1 = '1996/01/01';
      const date2 = '1996/01/03';
      const diff = model.diffDate(date1, date2, DateFormatEnum.HOUR);

      expect(diff).toEqual(expected);
    });

    it('01/01/1988 differ from 02/01/1998 by 1440 minutes', () => {
      const expected = 1440;
      const date1 = '1988/01/02';
      const date2 = '1988/01/01';
      const diff = model.diffDate(date1, date2, DateFormatEnum.MINUTE);

      expect(diff).toEqual(expected);
    });

    it('02/01/1988 differ from 01/01/1998 by -1440 minutes', () => {
      const expected = -1440;
      const date1 = '1988/01/01';
      const date2 = '1988/01/02';
      const diff = model.diffDate(date1, date2, DateFormatEnum.MINUTE);

      expect(diff).toEqual(expected);
    });
  });

  it('gets first date from month of 24/12/1994', () => {
    const expected = '1994-12-01';
    const input = '1994-12-24T05:00:00-02:00';
    const result = model.getMonthFirstDate(input, false);

    expect(result).toEqual(expected);
  });

  it('gets first date from month of 24/12/1994 in UTC', () => {
    const expected = '1994-12-01';
    const input = '1994-12-24';
    const result = model.getMonthFirstDate(input, true);

    expect(result).toEqual(expected);
  });
});
