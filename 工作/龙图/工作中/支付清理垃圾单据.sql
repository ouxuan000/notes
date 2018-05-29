delete from p#fasp_t_pavoucher t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay');

delete from busfw_t_uitable t where t.key in (select t.uikey from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay') and t.vchtypeid is not null);

delete from busfw_t_uicolumn t where t.key in (select t.uikey from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay') and t.vchtypeid is not null);

delete from busfw_t_uifunction t where t.key in (select t.uikey from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay') and t.vchtypeid is not null);

delete from busfw_t_uiqueryform t where t.key in (select t.uikey from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay') and t.vchtypeid is not null);

delete from busfw_t_uieditform t where t.key in (select t.uikey from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay') and t.vchtypeid is not null);

delete from busfw_t_uitabpage t where t.key in (select t.uikey from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay') and t.vchtypeid is not null);

delete from p#fasp_t_papage t where t.mouldid in (select t.guid from fasp_t_pabusinessmould t where t.appid = 'pay');

delete from fasp_t_pubmenu t where t.appid = 'pay';